import { db, DataTypes } from "@Application/database";

export default db.define("players", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
