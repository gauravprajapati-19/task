const { Schema, model } = require("mongoose");

const listSchema = new Schema({
    comName: { type: String, required: true },
    comPersonName: { type: String, required: true },
    comEmail: { type: String, required: true },
    comMobile: { type: String, required: true },
    comAddress: { type: String, required: true },
});

module.exports = model("List", listSchema);
