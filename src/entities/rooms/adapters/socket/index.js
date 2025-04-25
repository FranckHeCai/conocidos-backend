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

      // Optionally notify others
      // io.to(roomId).emit("playerMarkedReady", { playerId });
      const players = await playerController.get({roomId})
      const allPlayersReady = players.every(player => player.isReady === true)
      // Check if all players are ready
      if (allPlayersReady) {
        io.to(roomId).emit("allPlayersReady"); // trigger the next step of the game
      }
    })
  );
};

export default StartSocketServer;
