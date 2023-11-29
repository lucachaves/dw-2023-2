import express from 'express';

import Host from './models/Host.js';

const router = express.Router();

class HTTPError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

router.post('/hosts', async (req, res) => {
  const host = req.body;

  const newHost = await Host.create(host);

  if (newHost) {
    res.json(newHost);
  } else {
    throw new HTTPError('Invalid data to create host', 400);
  }
});

router.get('/hosts', async (req, res) => {
  const hosts = await Host.readAll();

  res.json(hosts);
});

router.get('/hosts/:id', async (req, res) => {
  const id = Number(req.params.id);

  const host = await Host.read(id);

  if (id && host) {
    res.json(host);
  } else {
    throw new HTTPError('Invalid id to read host', 400);
  }
});

router.put('/hosts/:id', async (req, res) => {
  const id = Number(req.params.id);

  const host = req.body;

  if (id && host) {
    const newHost = await Host.update(host, id);

    res.json(newHost);
  } else {
    throw new HTTPError('Invalid data to update host', 400);
  }
});

router.delete('/hosts/:id', async (req, res) => {
  const id = Number(req.params.id);

  if (id && (await Host.remove(id))) {
    res.sendStatus(204);
  } else {
    throw new HTTPError('Id is required to remove host', 400);
  }
});

// 404 handler
router.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
router.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof HTTPError) {
    res.status(err.code).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Something broke!' });
  }
});

export default router;
