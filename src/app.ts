import express, { Request, Response } from 'express';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/duties', (req: Request, res: Response) => {
    res.json([{ id: 1, name: "Example Duty" }]);
});

export default app;
