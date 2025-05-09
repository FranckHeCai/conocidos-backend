// import GenericModel from "@Application/repository/generic-model.js";
import GenericModel from "../../../application/repository/generic-model.js";
import Schema from "./schema.js";
// import questionModel from "entities/questions/model/schema.js"
import questionModel from "../../../entities/questions/model/schema.js"

Schema.associate = () => {
  Schema.belongsTo(questionModel, {
    foreignKey: "questionId",
    onDelete: "CASCADE",
  })
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
