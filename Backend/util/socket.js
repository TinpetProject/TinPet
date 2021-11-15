let io;
const connections = {};

module.exports = {
  init: (httpServer) => {
    io = require("socket.io")(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        credentials: true,
      },
    });
    io.on("connection", (socket) => {
      socket.on("login", (data) => {
        connections[data.userID] = socket.id;
      });
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error("socket.io is not inittialized");
    }
    return io;
  },
  triggerEmit: (targetUserID, type, data) => {
    console.log("message sent", connections);
    io.sockets.to(connections[targetUserID]).emit(type, data);
  },
  getConnection: (userID) => {
    return connections[userID];
  },
};
