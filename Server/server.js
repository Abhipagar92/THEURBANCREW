/*
const express = required('express');
const cors = required('cors');
const dotenv = required('dotenv');
const colors = required('colors');
const morgan = required('morgan');

//DOTENV
dotenv.config();

// REST OBJECT 
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.get('',(req,res)=> {
    res.status(200).json({
        success: true,
        message: "Welcome To UrbanCrew",
    });
});

//PORT
const PORT = Process.env.PORT || 8080;

//listen
app.listen(PORT,() => {
    console.log(`Server Running ${PORT}`.bgGreen.white);
});

*/
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

/* // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));
 */
// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome To UrbanCrew Company');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});