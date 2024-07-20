import axios from 'axios';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

async function fetchAndStoreData() {
  try {
    const response = await axios.get('https://portal.panelo.co/paneloresto/api/productlist/18');
    const categories = response.data.products;

    console.log('Fetched categories:', categories);

    const now = new Date();

    for (const category of categories) {
      const [categoryInstance, categoryCreated] = await Category.findOrCreate({
        where: { id: category.id },
        defaults: {
          name: category.name,
          user_id: category.user_id,
          fetched_at: now,  
        },
      });

      if (categoryCreated) {
        console.log(`Category ${category.name} created successfully`);
      } else {
        console.log(`Category ${category.name} already exists`);
      }

      for (const product of category.products) {
        const [productInstance, created] = await Product.findOrCreate({
          where: { id: product.id },
          defaults: {
            title: product.title,
            slug: product.slug,
            lang: product.lang,
            auth_id: product.auth_id,
            status: product.status,
            type: product.type,
            count: product.count,
            created_at: product.created_at,
            updated_at: product.updated_at,
            category_id: categoryInstance.id, 
            term_id: product.pivot.term_id,
            price: product.price.price,
            preview: product.preview.content,
            stock: product.stock.stock,
            fetched_at: now, 
          },
        });

        if (created) {
          console.log(`Product ${product.title} created successfully`);
        } else {
          console.log(`Product ${product.title} already exists`);
        }
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

export default fetchAndStoreData;
