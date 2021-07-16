const MessageController = require("./MessageController");

const redis = require("redis");
const { default: axios } = require("axios");
let io = false;

function initSocket(initIo) {
    io = initIo;
    //Init redis client
    redisClient = redis.createClient()
        //Waiting for new message from laravel
    redisClient.subscribe('newMessage');
    redisClient.on("message", function(channel, message) {
        let messageObj = JSON.parse(message)
        sendMessageDialog({ socket: false, message: messageObj.message, dialogId: messageObj.dialogId });
    });
    io.on("connection", (socket) => {
        let disconnectTimer = setTimeout(() => {
            socket.disconnect("Unauthorized");
        }, 10000);
        socket.on("auth", async(token) => {
            clearTimeout(disconnectTimer);

            axios.get(`${process.env.LARAVEL_API_URL}auth/me`, {
                headers: {
                    'Authorization': "Bearer " + token
                }
            }).then((res) => {
                socket.join(`user.admin`);
            }).catch((res) => {
                socket.disconnect("Unauthorized");
                return;
            })

        });
        socket.on("sendMessage", async({ socketId, dialogId, message, token }) => {
            try {
                MessageController.sendMesssage(message, dialogId, token).then(() => {
                    sendMessageDialog({ socket, dialogId, message });
                })
            } catch (e) {
                socket.disconnect("Unauthorized");
                return;
            }
        })
    });
}
// Send socket message to client
function sendMessageDialog({
    socket,
    dialogId,
    message,
}) {
    //if Admin user sended message with socket
    if (socket)
        socket.broadcast
        .to(`user.admin`)
        .emit("sendMessage", {
            message,
            dialogId
        });
    //if Simple user sended message with redis from Laravel
    else
        io
        .to(`user.admin`)
        .emit("sendMessage", {
            message,
            dialogId
        });
}

module.exports = {
    initSocket,
    sendMessageDialog,
};