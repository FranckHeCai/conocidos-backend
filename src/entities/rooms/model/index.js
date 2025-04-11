import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import playerSchema from "entities/players/model/schema"
import playerRoomSchema from "entities/playerRooms/model/schema"

Schema.belongsToMany(playerSchema, {
  through: playerRoomSchema,
  foreignKey: "roomId"
})

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
  getPlayers: async (roomId) => {
    const room = await Schema.findByPk(roomId, {
      include: {
        model: playerSchema,
        through: { attributes: [] }, // Exclude join table attributes
      },
    });
    return room ? room.players : [];
  }
};

export default Model;
