const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.emit('enviarMensaje', {
        usuario: 'Servidor',
        message: 'All your base are belong to us'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio MAL'
        //     });
        // }



    });
});