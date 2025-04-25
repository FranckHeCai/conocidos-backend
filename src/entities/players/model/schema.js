import { db, DataTypes } from "@Application/database";

export default db.define("players", {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    defaultValue: "zombie.png"
  },
  isReady: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  score: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  roomId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "rooms",
      key: "code", 
    },
  }
});
