import Product from '../models/Product.js';
import ExcelJS from 'exceljs';
import pkg from 'json2xml';

const { parse } = pkg;

async function exportToXML() {
  const products = await Product.findAll();
  const productsData = products.map(product => product.toJSON());

  const xml = parse({ products: productsData });
  return xml;
}

async function exportToExcel() {
  const products = await Product.findAll();
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Products');

  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Title', key: 'title', width: 30 },
    { header: 'Slug', key: 'slug', width: 30 },
    { header: 'Lang', key: 'lang', width: 10 },
    { header: 'Auth ID', key: 'auth_id', width: 10 },
    { header: 'Status', key: 'status', width: 10 },
    { header: 'Type', key: 'type', width: 10 },
    { header: 'Count', key: 'count', width: 10 },
    { header: 'Created At', key: 'created_at', width: 20 },
    { header: 'Updated At', key: 'updated_at', width: 20 },
    { header: 'Category ID', key: 'category_id', width: 10 },
    { header: 'Term ID', key: 'term_id', width: 10 },
    { header: 'Price', key: 'price', width: 10 },
    { header: 'Preview', key: 'preview', width: 50 },
    { header: 'Stock', key: 'stock', width: 10 },
  ];

  products.forEach(product => {
    worksheet.addRow(product.toJSON());
  });

  return workbook.xlsx.writeBuffer();
}

export { exportToXML, exportToExcel };
