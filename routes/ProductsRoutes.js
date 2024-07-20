import express from 'express';
import Product from '../models/Product.js';
import { exportToXML, exportToExcel } from '../services/exportData.js';

const router = express.Router();

router.get('/products', async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 50;
      const category = req.query.category || ''; 
      const page = parseInt(req.query.page) || 1; 
      const offset = (page - 1) * limit;
  
      const where = category ? { category_id: category } : {};
  
      const products = await Product.findAll({
        where,
        limit,
        offset,
        order: [['created_at', 'DESC']],
      });
  
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

router.post('/products', async (req, res) => {
  try {
    const { id, title, slug, lang, auth_id, status, type, count, created_at, updated_at, category_id, term_id, price, preview, stock } = req.body;
    const product = await Product.create({ id, title, slug, lang, auth_id, status, type, count, created_at, updated_at, category_id, term_id, price, preview, stock });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, lang, auth_id, status, type, count, created_at, updated_at, category_id, term_id, price, preview, stock } = req.body;
    await Product.update({ title, slug, lang, auth_id, status, type, count, created_at, updated_at, category_id, term_id, price, preview, stock }, { where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/export/xml', async (req, res) => {
  try {
    const xml = await exportToXML();
    res.type('application/xml').send(xml);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/export/excel', async (req, res) => {
  try {
    const buffer = await exportToExcel();
    res.type('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
