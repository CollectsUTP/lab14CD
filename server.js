// Importamos Express
const express = require("express");
const app = express();

// Puerto asignado por Render o por defecto 3000
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.send(
    "¡Hola desde Render! 🚀 Tu servidor Node.js está funcionando correctamente.Tank you for using Render 😄"
  );
});

// Ruta de ejemplo adicional
app.get("/api/saludo", (req, res) => {
  res.json({
    mensaje: "Hola, este es un endpoint de API funcionando en Render 😄",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
