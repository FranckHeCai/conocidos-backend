import { db, DataTypes } from "@Application/database";

export default db.define("playerQuestions", {
  playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "players", // Name of the users table
        key: "id",
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "questions", // Name of the events table
        key: "id",
      },
    },
},
{
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
});
