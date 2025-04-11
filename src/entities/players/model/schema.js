import { db, DataTypes } from "@Application/database";

export default db.define("players", {
  nickname: DataTypes.STRING,
  avatar: DataTypes.STRING,
  score: DataTypes.INTEGER,
});
