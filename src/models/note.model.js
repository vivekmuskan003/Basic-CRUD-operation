const mongoose = reuire("mongoose");

const noteSchema = mongoose.Schema({
    title:String,
    description:String
})

const noteModel = mongoose.model("notes",noteModel);

module.exports = noteModel
