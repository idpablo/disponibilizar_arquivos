const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const porta = 80; // Porta para o proxy reverso

// Configuração do proxy reverso
app.use(createProxyMiddleware('/',
  {
    target: `http://192.168.1.178:8080`, // URL do serviço na porta 8080
    changeOrigin: true,
  }
));

app.listen(porta, () => {
  console.log(`Proxy reverso rodando em http://prodatinha.arquivos.local/`);
});