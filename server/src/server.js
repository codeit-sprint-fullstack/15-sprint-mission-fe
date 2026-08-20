import express from 'express';
import { router } from './routes/index.js';
import { logger } from './middlewares/logger.js';
import { config } from './config/config.js';
import { connectDB } from './db/index.js';

const app = express();

await connectDB();
app.use(express.json());
app.use(logger);
app.use('/', router);

app.listen(config.PORT, () => {
  console.log(`Sprint mission 5 Server running on http://localhost:${config.PORT}`);
});