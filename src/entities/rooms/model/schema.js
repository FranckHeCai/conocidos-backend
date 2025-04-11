import { db, DataTypes } from "@Application/database";
import playerModel from "entities/players/model/"

export default db.define("rooms", {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  isReady: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});
