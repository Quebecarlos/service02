/**
 * Programa express e mongoose dans le cadre programmation service web
 * Carlos alberto
 * 29-06-2023
 */

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://carlosbd:poesie@cluster0.amq76pu.mongodb.net/labo01_serviceweb');
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('erreur de BD:', err);
});
db.once('open', ()=> {
    console.log('Connexion a la BD OK');    
})

app.get('/', (requete, reponse)=>{
    reponse.send('Allo tout le monde!');
});

app.get('/index.html', (requete, reponse)=>{
    reponse.send('Allo tout le monde de la Page index.html!');
});

app.listen(PORT);
console.log(`Serveur web fonctionnel sur le port ${PORT}`);
