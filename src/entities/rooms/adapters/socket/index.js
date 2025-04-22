import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const StartSocketServer = (io, socket) => {
  console.log("Room socket active");
  socket.on(
    "get-players",
    socketHandler(async () => {
      const players = await Controller.get()
      console.log("backend fetched players", players);
      io.emit('player-list', players)
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
