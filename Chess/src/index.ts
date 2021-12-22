import express from 'express';
import { connect, disconnect } from './mongo/connection';
import index from './routes/index'
import bodyParser from 'body-parser'
connect();

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/', index)

app.use(express.json);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

