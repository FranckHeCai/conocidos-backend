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

router.delete("/delete/:playerId",
  asyncHandler(async (req, res) => {
    const { playerId } = req.params;

    if (!playerId) {
      return res.status(400).send({ error: "playerId is required" });
    }

    const data = await Controller.deleteById(playerId)

    if (data[0] === 0) {
      return res.status(404).send({ error: `Player with id ${playerId} not found` });
    }

    res.send({ message: `Player with id ${playerId} deleted successfully` });
  })
)

router.put("/update/:playerId",
  asyncHandler(async (req, res) => {
    const { playerId } = req.params;
    const updateData = req.body
    if (!playerId) {
      return res.status(400).send({ error: "playerId is required" });
    }

    const data = await Controller.updatePlayer({ id:playerId }, updateData);

    if (data[0] === 0) {
      return res.status(404).send({ error: `Player with id ${playerId} not found` });
    }

    res.send({ message: `Player with id ${playerId} updated successfully` });
  })
)

router.get(
  "/:roomId",
  asyncHandler(async (req, res) => {
    const { roomId } = req.params;

    if (!roomId) {
      return res.status(400).send({ error: "roomId is required" });
    }

    const data = await Controller.get({ roomId });

    if (!data || data.length === 0) {
      return res.status(404).send({ error: "No players found for the given roomId" });
    }

    res.send(data);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      body: { nickname, avatar, score, roomId },
    } = req;

    const roomExist = await Controller.getRoom(roomId)
    if(roomExist.length === 0){
      console.log(roomExist)
      return res.status(400).send("Room does not exist")
    }

    await Controller.create({ nickname, avatar, score, roomId });
    res.send(`Jugador creado y asignado a sala ${roomId} con éxito!!`);
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
