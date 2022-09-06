import express from 'express';
require('dotenv/config');


const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get('/', (request, response) => {
  const users = [
    { name: "igor", age: 26 },
    { name: "ana", age: 26 }
  ];
  return response.json(users)
});

app.listen(port);