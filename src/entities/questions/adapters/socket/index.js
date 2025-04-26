import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const StartSocketServer = (io, socket) => {
  console.log("Question socket active");
  socket.on(
    "creating-questions",
    socketHandler(async (roomId) => {
      Controller.get({roomId})
      io.emit("alguienTermino", roomId);
    })
  );

};

export default StartSocketServer;
