// import { socketHandler } from "@Application/middlewares/error-handler.js";
// import { socketHandler } from "application/middlewares/error-handler.js";
import { socketHandler } from "../../../../application/middlewares/error-handler.js";
import Controller from "../../controller/index.js";

const StartSocketServer = (io, socket) => {
  console.log("Player socket active");


  socket.on(
    "addAlumnos",
    socketHandler(async (msg) => {
      const data = await Controller.getAll();
      console.log("aaaaaaaaaaaaaaaa", data);
    })
  );
};

export default StartSocketServer;
