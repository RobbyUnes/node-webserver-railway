import express from 'express';
import path from 'node:path';
import hbs from 'hbs';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(
  path.join(import.meta.dirname, 'views', 'partials')
);

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Roberto Martinez',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Roberto Martinez',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Roberto Martinez',
    titulo: 'Curso de Node'
  });
});

// Página 404
app.use((req, res) => {
  res.status(404).sendFile(
    path.join(
      import.meta.dirname,
      'public',
      'template',
      '404.html'
    )
  );
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});