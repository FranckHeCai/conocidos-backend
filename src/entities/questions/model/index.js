// import GenericModel from "@Application/repository/generic-model.js";
// import GenericModel from "application/repository/generic-model.js";
import GenericModel from "../../../application/repository/generic-model.js";
import Schema from "./schema.js";
// import answerModel from "entities/answers/model/schema.js";
import answerModel from "../../../entities/answers/model/schema.js";
// import roomModel from "entities/rooms/model/schema.js";
import roomModel from "../../../entities/answers/model/schema.js";
// import playerModel from "entities/players/model/schema.js";
import playerModel from "../../../entities/players/model/schema.js";

Schema.associate = () => {
  Schema.belongsTo(roomModel, {
    foreignKey: "roomId",
    onDelete: "CASCADE",
  });

  Schema.belongsTo(playerModel, {
    foreignKey: "playerId",
    onDelete: "CASCADE",
  });

  Schema.hasMany(answerModel, {
    foreignKey: "questionId",
    onDelete: "CASCADE",
  });
};

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
