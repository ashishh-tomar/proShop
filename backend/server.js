import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5005


connectDB();

const app = express();

app.get('/', (req,res)=>{
    res.send('API is running');
});


app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>{
    console.log('Server is running on Port : '+ port)
})