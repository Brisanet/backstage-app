const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Olá do seu novo serviço: ${process.env.SERVICE_NAME || '${{ values.name }}'}!`);
});

app.listen(port, () => {
  console.log(`Serviço rodando na porta ${port}`);
});
