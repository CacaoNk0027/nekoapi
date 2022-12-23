require('dotenv').config()

const express = require('express');
const app = express();
const morgan = require('morgan');
const discord = require('discord.js');
const { connectDatabase } = require('./sources/mongoose/connection');
const client = new discord.Client({
    intents: 1
})
client.on('ready', () => console.info('Client ready'));
client.login(process.env.token);
exports.client = client;

connectDatabase();

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => res.redirect('/api'));
app.use('/api', require('./sources/api/main').router);

app.get('*', (req, res) => {
    res.status(404).json({
        status: res.statusCode,
        description: 'Elemento no encontrado'
    })
})

app.listen(app.get('port'), () => console.info('listen on port', app.get('port')));

process.on('unhandledRejection', (err) => console.error(err));