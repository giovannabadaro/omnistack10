const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();


mongoose.connect('mongodb+srv://giovannabadaro:1996@cluster0-8f4xc.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(cors());
server.use(express.json());
server.use(routes);

//req é tudo que vem do front
//res é o que vem do servidor

//query params -> usado no GET -> |||req.query|||     (filtro, ordenação, paginação....)
//route params -> usado no PUT e DELETE -> |||req.params|||  (Identidifcar um recurso na alteração ou remoção)
//body ->  usado no POST -> |||req.body|||
server.listen(3336);