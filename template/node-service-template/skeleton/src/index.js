const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá mundo!!');
});

app.listen(1001, () => {
  console.log('Server is running on port 1001');
});
