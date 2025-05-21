// Commit: https://github.com/WhirIO/Server/commit/935e87b8d599fcbd99ead4c7bba497a5dcf237d3#diff-4a6f4d54ce7242bf7673f112099471335c8d0e509ac8742a89f89c7a2e75b12bL43
// Model: .915 | .227
'use strict';
const co = require('co');
const whir = _require('library/whir');
const m = _require('models');
module.exports.start = wss => {
    wss.on('connection', socket => {
        if (!socket.whir.session) {
            return whir.send(socket, {
                message: 'I need a valid session ID.',
                close: true
            });
        }
        const update = {
            $setOnInsert: {
                name: socket.whir.channel,
                maxUsers: socket.whir.maxUsers
            }
        };
        co(function* () {
            const channel = yield m.channel
                .findOneAndUpdate({ name: socket.whir.channel }, update, { upsert: true, new: true })
                .exec();
            const userExists = channel.connectedUsers.find(user => user.user === socket.whir.user);
            if (userExists) {
                return whir.send(socket, {
                    message: 'This user is already in use in this channel.',
                    close: true
                });
            }

            channel.connectedUsers.push(socket.whir);
            channel.save(() => {
                whir.send(socket, {
                    user: 'whir',
                    color: 'white',
                    channel: socket.whir.channel,
                    message: `Welcome to the _${socket.whir.channel}_ channel!`
                });
                whir.broadcast(wss.clients, socket.connectedSession, {
                    user: 'whir',
                    color: 'white',
                    channel: socket.whir.channel,
                    message: `_${socket.whir.user}_ has joined the channel!`
                });
            });
        });
    });
    wss.on('close', socket => {
       console.log('closed', socket);
    });
};
