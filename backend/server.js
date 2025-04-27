import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express(); // Önce app oluştur

app.use(cors({
  origin: '*', // HER YERDEN erişime izin ver
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(port, '0.0.0.0', () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
