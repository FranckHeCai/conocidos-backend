// import { db, DataTypes } from "@Application/database/index.js";
import { db, DataTypes } from "../../../application/database/index.js";

export default db.define("answers", {
  answer_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "questions",
      key: "id", 
    },
    onDelete: "CASCADE",
  },
});
