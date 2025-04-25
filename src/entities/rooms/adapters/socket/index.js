import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";
import playerController from "entities/players/controller"

let gameState = {
  // roomId: {
  //   players: new Set(['p1', 'p2']),
  //   answered: new Set(),
  // },
};

const StartSocketServer = (io, socket) => {
  console.log("Room socket active");
  socket.on(
    "playerJoins",
    socketHandler(async (roomId) => {
      // const players = await Controller.get()

      socket.join(roomId)

      const players = await playerController.get({roomId})

      if (!gameState[roomId]) {
        gameState[roomId] = {
          players: new Set(players.map((player) => player.id)), // 
          readyPlayers: new Set(),
          answered: new Set(),
        };
      }
      
      io.to(roomId).emit("playerHasJoined", players);
    })
  );

  socket.on("playerLeaves",
    socketHandler(async ({roomId, playerId, nickname}) => {

      await playerController.deleteById(playerId)
      const players = await playerController.get({roomId})
      io.to(roomId).emit("playerHasLeft", players);
    })
  );

  socket.on("playerIsReady", 
    socketHandler(async ({ roomId, playerId }) => {
      await playerController.updateById(playerId, {isReady: true})
      const roomData = await Controller.get({code: roomId})
      const maxPlayers = roomData[0].dataValues.maxQuestions

      // io.to(roomId).emit("playerMarkedReady", { playerId });
      const data = await playerController.get({roomId})
      const playersInRoom = data.length

      console.log("players currently in room: ", playersInRoom)
       const allPlayersReady = data.every(player => player.dataValues.isReady === true)


      if (allPlayersReady && playersInRoom === maxPlayers) {
        io.to(roomId).emit("allPlayersReady"); // trigger the next step of the game
      }
    })
  );
  socket.on("playerNotReady", 
    socketHandler(async ({ roomId, playerId }) => {
      await playerController.updateById(playerId, {isReady: false})
      
      // Optionally notify others
      // io.to(roomId).emit("playerMarkedReady", { playerId });
    })
  );
};

export default StartSocketServer;
