// import GenericModel from "@Application/repository/generic-model.js";
import GenericModel from "../../../application/repository/generic-model.js";
import Schema from "./schema.js";
// import roomModel from "entities/rooms/model/schema.js"
import roomModel from "../../../entities/rooms/model/schema.js"
// import questionModel from "entities/questions/model/schema.js"
import questionModel from "../../../entities/questions/model/schema.js"
// import answerModel from "entities/answers/model/schema.js"
import answerModel from "../../../entities/answers/model/schema.js"

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
    onDelete: "CASCADE"
  })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
