require("dotenv").config();

class SocketIO {
  constructor() {
    if (SocketIO.instance == null) {
      this.connections = {};
      this.socket = {};
      SocketIO.instance = this;
    }
    return SocketIO;
  }

  init = (httpServer) => {
    this.socket = require("socket.io")(httpServer, {
      cors: {
        origin: process.env.FE_BASE_URL,
        credentials: true,
      },
    });
    this.socket.on("connection", (socket) => {
      socket.on("login", (data) => {
        this.notifyUserStatus({ userID: data.userID, isOnline: true });
        this.connections[data.userID] = socket.id;
      });
      socket.on("logout", (data) => {
        this.notifyUserStatus({ userID: data.userID, isOnline: false });
        delete this.connections[data.userID];
      });
    });
  };

  getSocket = () => {
    if (!this.socket) {
      throw new Error("socket.io is not inittialized");
    }
    return this.socket;
  };

  disconnect = (userID) => {
    delete this.connections[userID];
  };

  triggerEmit = (targetUserID, type, data) => {
    this.socket.sockets.to(this.connections[targetUserID]).emit(type, data);
  };

  notifyUserStatus = (data) => {
    this.socket.sockets.emit("status", data);
  };

  getConnection = (userID) => {
    return this.connections[userID];
  };
}

const socketIO = new SocketIO();
Object.freeze(socketIO);
module.exports = socketIO.instance;
