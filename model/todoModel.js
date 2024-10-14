import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{
        type: String
    },
    iscompleted:{
        type: Boolean
    },
    workId:{
        type: Number
    }
});

const toDo = mongoose.model("todos",todoSchema);
export default toDo;