const express = require('express');

const app = express();

app.use(express.json({ limit: '20mb' }));

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'anuncios-worker',
    time: new Date().toISOString()
  });
});

app.post('/publicar', async (req, res) => {

  console.log('Recibido publicar');

  res.json({
    ok: true,
    accion: 'publicar',
    mensaje: 'Simulado'
  });

});

app.post('/renovar', async (req, res) => {

  console.log('Recibido renovar');

  res.json({
    ok: true,
    accion: 'renovar',
    mensaje: 'Simulado'
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
