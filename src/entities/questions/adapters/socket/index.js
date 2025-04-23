import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const StartSocketServer = (io, socket) => {
  console.log("StartSocketServer");
  socket.on(
    "addQuestion",
    socketHandler(async (msg) => {
      io.emit("Added Question", msg.edad);
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
