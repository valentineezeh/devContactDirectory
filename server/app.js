import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './routes/index';

// Instance of the express app
const app = express();

// Request logger
app.use(morgan('dev'));

// Parsing body data
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect all routes to application
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Developer Contact Directory..',
  });
});


const port = process.env.PORT || 7000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

export default app;
