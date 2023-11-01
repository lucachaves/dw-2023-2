import express from 'express';
import morgan from 'morgan';
import ping from 'ping';
// import { ping } from './lib/ping.js';

const app = express();

app.use(morgan('tiny'));

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

app.get('/ping', async (req, res) => {
  const host = req.query.host;

  if (host) {
    // const output = await ping(host);

    // res.json({
    //   output,
    // });

    let output = await ping.promise.probe(host);

    res.json(output);
  } else {
    throw new HTTPError('Host is required', 400);
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
app.use((err, req, res, next) => {
  // console.error(err.stack);
  if (err instanceof HTTPError) {
    res.status(err.code).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Something broke!' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
