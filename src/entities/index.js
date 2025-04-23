import userRoutes from "./players/adapters/http";
import questionRoutes from "./questions/adapters/http"
import answersRoutes from "./answers/adapters/http"
import roomsRoutes from "./rooms/adapters/http"
import questionSocket from "./questions/adapters/socket"
import playersSocket from "./players/adapters/socket"

export const Routes = (app) => {
  userRoutes(app, "/players");
  questionRoutes(app, "/questions")
  answersRoutes(app, "/answers")
  roomsRoutes(app, "/rooms")
};

export const Sockets = (io, socket) => {
  questionSocket(io, socket)
  playersSocket(io, socket)
};
