import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const StartSocketServer = (io, socket) => {
  console.log("StartSocketServer");
  socket.on(
    "PlayerJoined",
    socketHandler(async (player) => {
      console.log(player.roomId);
      const allPlayers = await Controller.get({ roomId: player.roomId })
      io.emit(`PlayerHasJoined`, allPlayers);
    })
  );

  socket.on(
    "addAlumnos",
    socketHandler(async (msg) => {
      const data = await Controller.getAll();
      console.log("aaaaaaaaaaaaaaaa", data);
    })
  );
};

export default StartSocketServer;
