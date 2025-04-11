import GenericModel from "@Application/repository/generic-model";
import Schema from "./schema";
import playerModel from "entities/players/model"
import questionModel from "entities/questions/model"

Schema.associate = () => {
  Schema.hasMany(playerModel, {onDelete: "CASCADE"})
  Schema.hasMany(questionModel, {onDelete: "CASCADE"})
}

const Model = {
  ...GenericModel(Schema),
  getByEmail: (email) => Schema.findOne({ where: { email } }),
};

export default Model;
