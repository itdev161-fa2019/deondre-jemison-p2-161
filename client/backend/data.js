// backend/data.js
const mongoose = require("mongoose");
const SChema = mongoose.Schema;

// this will be our database's data structure
const dataSchema = new Schema(
    {
        id: Number,
        message: toString,
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);