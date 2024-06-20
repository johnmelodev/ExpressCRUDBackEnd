// Importando o módulo Express || Criando uma instância do Express
const express = require('express');
const app = express();

// Configurando o Express para usar o middleware que analisa corpos de solicitação JSON
app.use(express.json());

// Armazenando os usuários em uma variável
const users = [];

// GET READ----------------------------------
app.get('/users', (req, res) => {
    console.log('getting users');
    res.status(200).send({ users: users });
});

app.get('/users/:id', (req, res) => {
    const userID = req.params.id;
    console.log("getting users");
    res.status(200).send(users.find(x => x.id == userID));
});

let idCounter = 1
// POST CREATE----------------------------------
app.post('/users', (req, res) => {
    // Cria um novo usuário com um ID gerado automaticamente
    const newUser = {
        id: idCounter,
        ...req.body
    };
    // Adiciona o novo usuário à lista de usuários
    users.push(newUser);
    console.log('creating user');
    // Incrementa o contador de ID para a próxima criação de usuário
    idCounter++;
    res.status(200).send(newUser);
});

// PUT endpoint to update user data
app.put('/users/:id', (req, res) => {
    const user = users.find(x => x.id == req.params.id);
    const userId = users.indexOf(user);
    // saving the user id and fixing in the top
    const updateUser = { id: user.id, ...req.body };
    users[userId] = updateUser;
    res.status(200).send("user successfully updated");
});


// DELETE endpoint to delete user data
app.delete('/users/:id', (req, res) => {
    const user = users.find(x => x.id == req.params.id);
    const userId = users.indexOf(user);
    users.splice(userId, 1);
    res.status(200).send("user successfully deleted");
});

// configurando a porta
app.listen(3000, () => {
    console.log('server started http://localhost:3000/')
});
