import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import roomsSchema from "entities/rooms/model/schema"
import playerRoomsSchema from "entities/playerRooms/model/schema"
import questionSchema from "entities/questions/model/schema"
import playerQuestionSchema from "entities/playerQuestions/model/schema"

Schema.belongsToMany(roomsSchema, {
  through: playerRoomsSchema,
  foreignKey: "playerId"
})

Schema.belongsToMany(questionSchema, {
  through: playerQuestionSchema,
  foreignKey: "playerId"
})



const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
  getQuestions: async (playerId) => {
    const player = await Schema.findByPk(playerId, {
      include: {
        model: questionSchema,
        through: { attributes: [] }, // Exclude join table attributes
      },
    });
    return player ? player.questions : [];
  }
};

export default Model;
