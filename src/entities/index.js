import userRoutes from "./players/adapters/http/index.js";
import questionRoutes from "./questions/adapters/http/index.js"
import answersRoutes from "./answers/adapters/http/index.js"
import roomsRoutes from "./rooms/adapters/http/index.js"
import roomSocket from "./rooms/adapters/socket/index.js"
import playerSocket from "./players/adapters/socket/index.js"
import questionSocket from "./questions/adapters/socket/index.js"
import answersSocket from "./answers/adapters/socket/index.js"

export const Routes = (app) => {
  userRoutes(app, "/players");
  questionRoutes(app, "/questions")
  answersRoutes(app, "/answers")
  roomsRoutes(app, "/rooms")
};

export const Sockets = (io, socket) => {
  // userSockets(io, socket); 
  roomSocket(io, socket)
  playerSocket(io, socket)
  questionSocket(io, socket)
  answersSocket(io, socket)
};
