    var socket = io();


    //Escuchar sucesos
    socket.on('connect', function() {
        console.log('Conectado al servidor');
    });

    socket.on('disconnect', function() {
        console.log('Perdimos conexion con el servidor');
    });


    //Emits son para enviar informacion
    socket.emit('enviarMensaje', {
        usuario: 'Brian',
        mensaje: 'Hola Mundo'
    }, function(resp) {
        console.log('Respuesta server:', resp);
    });

    //Escuchar informacion
    socket.on('enviarMensaje', function(message) {
        console.log(message);
    })