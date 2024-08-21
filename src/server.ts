"use strict"
import express from 'express';
import dutyRoutes from './routes/dutyRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Configure CORS
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE', // Allowed methods
    allowedHeaders: 'X-Requested-With,Content-Type' // Allowed headers
  };
  
app.use(cors(corsOptions)); // Apply CORS middleware with the specified options

app.use(bodyParser.json());
app.use('/api', dutyRoutes);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

module.exports = app;
