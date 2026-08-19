import express from 'express';
import { router } from './routes/index.js';
import { logger } from './middlewares/logger.js';

const app = express();
const PORT = 5001;

app.use(express.json());

app.use(logger);

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});