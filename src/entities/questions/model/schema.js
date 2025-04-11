import { db, DataTypes } from "@Application/database";

export default db.define("questions", {
  question_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
