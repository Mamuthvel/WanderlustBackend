import express from 'express';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors'
import { SeedData } from './utils/seed.js';
const app = express();

app.use(express.json());
app.use(cors({
    origin:'http://localhost:8080',
    credentials: true
}))
app.use('/api', userRoutes);
app.use(errorHandler);
// SeedData();
export default app;
