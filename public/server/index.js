const express = require('express');
const bodyParser = require('body-parser');
const booksController = require('./controllers/books_controller');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());
const base = '/api/books';

app.post(base, booksController.create);
app.get(base, booksController.read);
app.put(`${base}/:id`, booksController.update);
app.delete(`${base}/:id`, booksController.delete);


const port = 3000;

app.listen(port, () => {console.log(`server listening on port: ${port}`)});
