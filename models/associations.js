import Category from './Category.js';
import Product from './Product.js';

const defineAssociations = () => {

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

};


export default defineAssociations;