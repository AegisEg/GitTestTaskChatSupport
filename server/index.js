/**
 * server.js
 * Author: Vasilev Egor
 */
"use strict";

const express = require("express");
const { initSocket } = require("./controllers/SocketController");
var history = require('connect-history-api-fallback');
const path = require("path");

//ENV load
const envFound = require("dotenv").config();
if (!envFound) {
    console.log(
        "⚠️  No .env file for HYPER10N found: this file contains" +
        "your Stripe API key and other secrets.\nTry copying .env.example to .env" +
        "(and make sure to include your own keys!)"
    );
    process.exit(0);
}
// Use Express as our web server
const app = express();
app.use(history());
//path to public Vue js
const publicPuth = path.join(__dirname, './vue/dist')
app.use(express.static(publicPuth));

// Starts the server
async function startServer() {
    // Start the Express server
    const http = require("http").createServer(app);
    const io = require("socket.io")(http);
    initSocket(io);
    http.listen(process.env.PORT, () => {
        console.log(
            `⚡️ CHAT server started: http://localhost:${process.env.PORT}`
        );
    });
    // if (process.env.MODE == "production") {

    // }
}
startServer();