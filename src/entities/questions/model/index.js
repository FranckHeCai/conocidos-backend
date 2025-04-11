import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import answerModel from "entities/answers/model"
import roomModel from "entities/rooms/model"
import playerModel from "entities/players/model"

Schema.associate = () =>{
  Schema.belongsTo(roomModel)
  Schema.belongsTo(playerModel, {
    foreignKey: "id"
  })
  Schema.hasMany(answerModel, { onDelete: "CASCADE" })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
