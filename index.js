import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database.js';
import productRoutes from './routes/ProductsRoutes.js';
import tesRoutes from './routes/TesRoutes.js';
import fetchAndStoreData from './services/fetchData.js';  
import defineAssociations from './models/associations.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// app.use('/api', productRoutes);
app.use('/api', tesRoutes);
defineAssociations();

app.listen(5100, async () => {
  console.log('Server is running on port 5100');
  await sequelize.sync();
  await fetchAndStoreData(); 
});