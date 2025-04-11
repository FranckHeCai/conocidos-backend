import { db, DataTypes } from "@Application/database";

export default db.define("questionAnswers", {
  questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "questions", // Name of the users table
        key: "id",
      },
    },
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "answers", // Name of the events table
        key: "id",
      },
    },
},
{
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
});
