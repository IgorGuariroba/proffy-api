import express from 'express';
import routes from './routes';
import cors from 'cors';
require('dotenv/config');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port = process.env.PORT;



app.listen(port);