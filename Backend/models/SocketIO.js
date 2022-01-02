require("dotenv").config();

class SocketIO {
  constructor() {
    if (SocketIO.instance == null) {
      this.connections = {};
      this.socket = {};
      this.notifications = {};
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
        this.triggerEmit(
          data.userID,
          "getNotification",
          this.notifications[data.userID]
        );
        console.log(this.connections);
      });
      socket.on("logout", (data) => {
        console.log("logouted", data);
        this.notifyUserStatus({ userID: data.userID, isOnline: false });
        delete this.connections[data.userID];
        console.log(this.connections);
      });
      socket.on("seenNotification", (data) => {
        console.log("seenData");
        this.seenMessage(data.userID, data.chosenUserID);
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
    console.log("sending");
    this.socket.sockets.to(this.connections[targetUserID]).emit(type, data);
  };

  testNoti = (userID) => {
    console.log('got this from server side')
  }

  releaseNewMessage = (targetUserID, data) => {
    // console.log('server got a new released message');
    // console.log(data);
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
  }

  seenMessage = (userID, ownerUserID) => {
    // const msgSeenList =
    //   !!this.notifications[ownerUserID.toString()] &&
    //   this.notifications[ownerUserID.toString()].some((noti) => {
    //     noti.userID === userID;
    //   });
    // console.log(`userID: ${userID}`)
    // console.log(`ownerUserID: ${ownerUserID}`);
    // // console.log(this.notifications);
    // console.log(this.notifications[ownerUserID.toString()]);
    const retrievedNoti = this.notifications[ownerUserID.toString()] || [];
    const filtered =  !!retrievedNoti? retrievedNoti.filter(
      (noti) => !(noti.userID == userID)
    ) : [];
    // console.log("preapre to remove notifications");
    // console.log(this.notifications);
    this.notifications[ownerUserID.toString()] = filtered
    this.triggerEmit(
      ownerUserID,
      "getNotification",
      this.notifications[ownerUserID]
    );
  }
  
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
