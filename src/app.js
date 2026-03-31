const express = require("express")
const noteModel = require("./models/note.model")

const app = express();
app.use(express.json())

app.post('/notes',async(req,res)=>{
    const { title, description } = req.body;
    const newNote = await noteModel.create({
        title,
        description
    })

    if(!newNote){
        return res.status(400).json({message:"note could not be created"})
    }

    res.status(201).json({
        message:"note created successfully",
        note: newNote
    })
})

app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"note fetched successfully",
        notes : notes
    })
})

app.get('/notes/:id', async (req, res) => {
    const { id } = req.params;
    const note = await noteModel.findById(id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
        message: "Note fetched successfully",
        note: note
    });
});


app.delete('/notes/:id',async(req,res)=>{
    const { id } = req.params;
    const deletedNote = await noteModel.findByIdAndDelete(id);

    if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
        message:"note deleted successfully"
    });
})

app.patch('/notes/:id',async(req,res)=>{
    const { id } = req.params;
    const updatedNote = await noteModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedNote) {
        return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
        message:"note updated successfully",
        note: updatedNote
    });
})

module.exports = app
