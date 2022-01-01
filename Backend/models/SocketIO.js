class SocketIO {
  constructor() {
    if (SocketIO.instance == null) {
      this.connections = {};
      this.socket = {};
      this.notifications = [];
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
        this.triggerEmit(
          data.userID,
          "getNotification",
          this.notifications[data.userID]
        );
      });
    });

    // this.socket.on("seenNotification", (data) => {
    //   console.log("On server side, get seen message");
    // });

    //     this.socket.on("getNotification", (data) => {
    //       console.log("On server side, get noti message");
    //     });
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

  testNoti = (userID) => {
    console.log('got this from server side')
  }

  releaseNewMessage = (targetUserID, data) => {
    console.log('server got a new released message');
    if (!this.notifications[targetUserID]) {
      this.notifications[targetUserID] = [data];
    } else 
    this.updateNotification(targetUserID ,data);
    this.triggerEmit(targetUserID, "getNotification", this.notifications[targetUserID]);
  }

  updateNotification = (userID, data) => {
    this.notifications[userID].push(data);
  };

  removeNotification = (userID, messageID) => {
    const msgIndex = this.notifications[userID].indexOf(messageID);
    if (!!msgIndex) this.notifications[userID].splice(msgIndex, 1);
  };

  getConnection = (userID) => {
    return this.connections[userID];
  };
}

const socketIO = new SocketIO();
Object.freeze(socketIO);
module.exports = socketIO.instance;
