import express from 'express';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}))
app.use('/api', userRoutes);
app.use(errorHandler);

export default app;
