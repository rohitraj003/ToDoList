import todoModel from "../model/todoModel.js";

export const addTask = async (req,res) => {
    const { task, iscompleted, workId} = req.body;
    const newTask = new todoModel({
        task,
        iscompleted,
        workId
    });
    await newTask.save();
    res.status(200).json({ msg:"Task added" });
    
}

export const updateTask = async (req,res) => {
    const iscompleted = req.body.iscompleted;
    const workId = Number(req.params.id.replace(/\D/g, ''));
    // console.log(typeof(workId));
    if(isNaN(workId)){
        return res.status(400).json({ msg: "Invalid workId format" });
    }
    const task = await todoModel.findOne({workId:workId})
    if(!task){
        return res.json({msg:"Task do not exists"});
    }
    task.iscompleted = iscompleted;
    await task.save();
    return res.status(200).json({msg:"Task updated"});
}

export const deleteTask = async(req,res) => {
    const workId = Number(req.params.id.replace(/\D/g, ''));
    if(isNaN(workId)){
        return res.json({msg:"Invalid workId format"});
    }
    await todoModel.deleteOne({workId:workId});
    return res.status(200).json({msg:"Task deleted successfully"});
}