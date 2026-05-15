const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('SatLab is running! 🚀');
});

app.listen(port, () => {
  console.log(`SatLab's backend running on port ${port}`);
});