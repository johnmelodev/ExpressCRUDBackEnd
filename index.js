// Importando o módulo Express || Criando uma instância do Express
const express = require('express');
const app = express();

// Configurando o Express para usar o middleware que analisa corpos de solicitação JSON
app.use(express.json());

// GET READ----------------------------------
app.get('/users', (req, res) => {
    console.log(req.query)
    console.log('getting users');
    res.status(200).send('successful');
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.status(200).send('successful');
});


// POST CREATE----------------------------------
app.post('/users', (req, res) => {
    console.log('getting users');
    res.status(200).send(req.body);
});


// PUT EDIT----------------------------------
app.post('/users/:id', (req, res) => {
    console.log('API put users');
    res.status(200).send(req.params.id);
});

// DELETE----------------------------------
app.delete('/users/:id', (req, res) => {
    console.log('API delete users');
    res.status(200).send(req.params.id);
});






// configurando a porta
app.listen(3000, () => {
    console.log('server started http://localhost:3000/')

});

