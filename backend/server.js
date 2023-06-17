import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const port = process.env.PORT || 5005


connectDB();

const app = express();

//Body Parse Middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cookie Parser Middle ware
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('API is running');
});


app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>{
    console.log('Server is running on Port : '+ port)
})