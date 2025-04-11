import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import questionModel from "entities/questions/model"

Schema.associate = () => {
  Schema.belongsTo(questionModel)
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
