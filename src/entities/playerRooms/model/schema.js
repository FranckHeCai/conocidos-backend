import { db, DataTypes } from "@Application/database";

export default db.define("playerRooms", {
  playerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "players", // Name of the users table
        key: "id",
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "rooms", // Name of the events table
        key: "code",
      },
    },
},
{
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
});
