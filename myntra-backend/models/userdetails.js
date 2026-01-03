const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      trim: true,
    },

    LastName: {
      type: String,
    },

    Email: {
      type: String,
      required : true
    },

    Password: {
      type: String,
      required : true
    },

    Type: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("signup", UserDetailSchema);