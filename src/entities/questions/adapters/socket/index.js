import { socketHandler } from "@Application/middlewares/error-handler";
import Controller from "../../controller";
import { useState } from "react";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const [currentQuestion, setCurrentQuestion] = useState();

const StartSocketServer = (io, socket) => {
  console.log("Question socket active");
  socket.on(
    "get-questions",
    socketHandler(async (roomId) => {
      const questions = await Controller.get({ roomId });
      console.log(questions);
      const shuffledQuestions = shuffle(questions);
      io.emit("fetched-questions", shuffledQuestions[0]);
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
