import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import roomModel from "entities/rooms/model"
import questionModel from "entities/questions/model"
import answerModel from "entities/answers/model"

Schema.associate = () =>{
  Schema.belongsTo(roomModel)
  Schema.hasMany(answerModel, { onDelete:"CASCADE" })
  Schema.hasMany(questionModel, { 
    foreignKey: "id",
    onDelete: "SET NULL"
  })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
