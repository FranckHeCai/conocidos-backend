import { db, DataTypes } from "@Application/database";

export default db.define("answers", {
  answer_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
  },
});
