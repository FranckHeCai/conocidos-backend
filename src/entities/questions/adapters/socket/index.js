import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const StartSocketServer = (io, socket) => {
  console.log("Question socket active");
  socket.on(
    "get-questions",
    socketHandler(async (obj) => {
      const { roomId, playerId } = obj;
      const questions = await Controller.get({ roomId });
      const AllshuffledQuestions = shuffle(questions);
      const FinalQuestions = AllshuffledQuestions.filter(questions => questions.playerId !== obj.playerId)
      io.emit("fetched-questions", AllshuffledQuestions);
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
