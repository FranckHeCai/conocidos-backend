import { db, DataTypes } from "@Application/database";

export default db.define("rooms", {
  code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  isReady: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  maxPlayers: DataTypes.INTEGER,
  maxQuestions: DataTypes.INTEGER
});
