// import GenericModel from "@Application/repository/generic-model.js";
// import GenericModel from "application/repository/generic-model.js";
import GenericModel from "../../../application/repository/generic-model.js";
import Schema from "./schema.js";
// import playerModel from "entities/players/model/schema.js"
import playerModel from "../../../entities/players/model/schema.js"
// import questionModel from "entities/questions/model/schema.js"
import questionModel from "../../../entities/questions/model/schema.js"

Schema.associate = () => {
  Schema.hasMany(playerModel, {
    foreignKey: "roomId", 
    onDelete: "CASCADE"
  })
  Schema.hasMany(questionModel, {
    foreignKey: "roomId", 
    onDelete: "CASCADE"
  })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
