import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import roomModel from "entities/rooms/model"
import questionModel from "entities/questions/model"
import answerModel from "entities/answers/model"

Schema.associate = () =>{
  Schema.belongsTo(roomModel, {
    foreignKey: "roomId",
    onDelete: "CASCADE",
  })
  Schema.hasMany(answerModel, {
    foreignKey: "playerId", 
    onDelete:"CASCADE", 
  })
  Schema.hasMany(questionModel, { 
    foreignKey: "playerId",
    onDelete: "SET DELETE"
  })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
