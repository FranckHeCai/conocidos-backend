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

router.put(
  "/update-room/:code",
  asyncHandler(async (req, res) => {
    const { code } = req.params;
    const { isReady } = req.body;

    if (!code) {
      return res.status(400).send({ error: "Room code is required" });
    }

    if (typeof isReady !== "boolean") {
      return res.status(400).send({ error: "isReady must be a boolean" });
    }

    const updatedRoom = await Controller.update( code , { isReady });

    console.log(updatedRoom)

    if (updatedRoom[0] === 0) {
      return res.status(404).send({ error: `Room with code ${code} not found` });
    }

    res.send({ message: `Room with code ${code} updated successfully` });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      body: { code, isReady },
    } = req;
    await Controller.create({ code, isReady });
    res.send(`Sala con codigo ${code} creada con éxito!!`);
  })
);

export default (app, entityUrl) => app.use(entityUrl, router);
