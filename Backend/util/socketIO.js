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
        origin: "http://localhost:3000",
        credentials: true,
      },
    });
    this.socket.on("connection", (socket) => {
      socket.on("login", (data) => {
        this.connections[data.userID] = socket.id;
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
    this.socket.sockets.to(connections[targetUserID]).emit(type, data);
  };

  getConnection = (userID) => {
    return this.connections[userID];
  };
}

const socketIO = new SocketIO();
Object.freeze(socketIO);
module.exports = socketIO;
