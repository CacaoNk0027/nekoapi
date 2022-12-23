const mongoose = require('mongoose');

let clientSchema = new mongoose.Schema({
    clientId: String,
    clientGuilds: Number,
    clientMembers: Number,
    clientVotes: Number,
    clientCommands: []
})

exports.ClientData = mongoose.model('client', clientSchema);