var socket = io();
// on : Es para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor.");
});
// Detecta la desconecion.
socket.on("disconnect", function() {
    console.log("Desconectado del servidor");
});
/// Emit : Son para enviar información
socket.emit(
    "enviarMensaje", {
        usuario: 'Fabian',
        mensaje: "Holitas",
    },
    function(resp) {
        console.log("Respuesta server :", resp);
    }
);

// Escuchar información
socket.on("enviarMensaje", function(resp) {
    console.log(resp);
});