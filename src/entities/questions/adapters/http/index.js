import express from "express";
import Controller from "../../controller";
import { asyncHandler } from "@Application/middlewares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Application/middlewares/restricted-access";

const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     // await Controller.create({ email: 'borrame@borrame.com' });
//     res.send("Llegamos a user");
//   })
// );

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
  })
);

router.get(
  "/player/:playerId",
  asyncHandler(async (req, res) => {
    const { playerId } = req.params;

    if (!playerId) {
      return res.status(400).send({ error: "playerId is required" });
    }

    const data = await Controller.get({ playerId });

    if (!data || data.length === 0) {
      return res.status(404).send({ error: "No questions found for the given playerId" });
    }

    res.send(data);
  })
);

router.get(
  "/room/:roomId",
  asyncHandler(async (req, res) => {
    const { roomId } = req.params;

    if (!roomId) {
      return res.status(400).send({ error: "roomId is required" });
    }

    const data = await Controller.get({ roomId });

    if (!data || data.length === 0) {
      return res.status(404).send({ error: "No questions found for the given roomId" });
    }

    res.send(data);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      body: { question_text, roomId, playerId },
    } = req;
    await Controller.create({ question_text, roomId, playerId });
    res.send(`Pregunta del jugador ${playerId} añadida a sala ${roomId} con éxito!!`);
  })
);



export default (app, entityUrl) => app.use(entityUrl, router);
