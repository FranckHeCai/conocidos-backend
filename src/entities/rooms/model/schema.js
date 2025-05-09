// import { db, DataTypes } from "@Application/database/index.js";
// import { db, DataTypes } from "application/database/index.js";
import { db, DataTypes } from "../../../application/database/index.js";

export default db.define("rooms", {
  code: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true
  },
  maxPlayers: DataTypes.INTEGER,
  maxQuestions: DataTypes.INTEGER
});
