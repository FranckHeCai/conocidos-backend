import { db, DataTypes } from "@Application/database";

export default db.define("rooms", {
  code: DataTypes.STRING,
  isReady: DataTypes.BOOLEAN,
});
