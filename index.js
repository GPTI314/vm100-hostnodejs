const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'ok', app: 'vm100-hostnodejs1', timestamp: new Date().toISOString() });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true });
});

app.listen(port, () => {
  console.log(`vm100-hostnodejs1 running on port ${port}`);
});
