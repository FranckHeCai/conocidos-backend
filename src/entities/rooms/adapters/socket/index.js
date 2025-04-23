import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";
import playerController from "entities/players/controller"

const StartSocketServer = (io, socket) => {
  console.log("Room socket active");
  socket.on(
    "get-players",
    socketHandler(async (roomId) => {
      // const players = await Controller.get()
      const players = await playerController.get({roomId})
      console.log("backend fetched players", players);
      io.emit('fetched-players', players)
    })
  );
  socket.on(
    "alguienTermino",
    socketHandler(async (msg) => {
      io.emit("alguienTermino", msg);
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
