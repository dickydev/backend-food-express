import Product from '../models/Product.js';
import Category from '../models/Category.js';

export const getProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10; 
    const category = req.query.category;

    const where = {};
    if (category) {
      where.category_id = category; // Filter berdasarkan category_id
    }

    const products = await Product.findAll({
      where,
      limit: limit,
      include: [{
        model: Category,
        attributes: ['name'] 
      }]
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  
};

// Mendapatkan satu produk berdasarkan ID
export const getProductById = async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [{
          model: Category,
          attributes: ['name']
        }]
      });
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Membuat produk baru
  export const createProduct = async (req, res) => {
    try {
      const { title, slug, lang, auth_id, status, type, price, stock, category_id, preview } = req.body;
  
      const newProduct = await Product.create({
        title,
        slug,
        lang,
        auth_id,
        status,
        type,
        price,
        stock,
        category_id,
        preview
      });
  
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Memperbarui produk
  export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, slug, lang, auth_id, status, type, price, stock, category_id, preview } = req.body;
  
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      product.title = title;
      product.slug = slug;
      product.lang = lang;
      product.auth_id = auth_id;
      product.status = status;
      product.type = type;
      product.price = price;
      product.stock = stock;
      product.category_id = category_id;
      product.preview = preview;
  
      await product.save();
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Menghapus produk
  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const product = await Product.findByPk(id);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      await product.destroy();
  
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const exportToExcel = async() => {
    try {
        const buffer = await exportToExcel();
        res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }

  export const exportToXML = async() => {
    try {
        const xml = await exportToXML();
        res.type('application/xml').send(xml);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }