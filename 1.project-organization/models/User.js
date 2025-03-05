import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

// Define the User model
const User = sequelize.define("User", {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync(); // Check the block about Model synchronization

export default User;
