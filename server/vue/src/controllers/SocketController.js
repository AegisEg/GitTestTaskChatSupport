import io from "socket.io-client";
import config from "../config";
import store from "../store/index"
let socket = null;

export default {
    init: (apiToken) => {
        socket = io(config.socketUrl, {
            transports: ["websocket", "polling", "flashsocket"],
        });
        let socketId = socket.id;
        socket.on("connect", () => {
            socket.emit("auth", apiToken);
        });
        socket.on("sendMessage", ({ message, dialogId }) => {
            store.dispatch("dialogs/appendMessage", { message, dialogId });
        })

    },
    getSocketId: () => {
        return socket.id;
    },
    sendMessage: (socketId, dialogId, message, token) => {
        socket.emit("sendMessage", {
            socketId,
            dialogId,
            message,
            token
        });
    }
}