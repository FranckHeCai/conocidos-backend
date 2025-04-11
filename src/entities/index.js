import userRoutes from "./players/adapters/http";
import questionRoutes from "./questions/adapters/http"
import answersRoutes from "./answers/adapters/http"
import roomsRoutes from "./rooms/adapters/http"
import playerRoomsRoutes from "./playerRooms/adapters/http"
import playerQuestionRoutes from "./playerQuestions/adapters/http"
import questionAnswersRoutes from "./questionAnswers/adapters/http"

export const Routes = (app) => {
  userRoutes(app, "/players");
  questionRoutes(app, "/questions")
  answersRoutes(app, "/answers")
  roomsRoutes(app, "/rooms")
  playerRoomsRoutes(app, "/player-to-room")
  playerQuestionRoutes(app, "/player-questions")
  questionAnswersRoutes(app, "/question-answers")
};

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
};
