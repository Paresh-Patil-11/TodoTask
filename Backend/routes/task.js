const express = require("express")
const Task = require("../models/Task")
const auth = require("../middleware/auth")

const router = express.Router()

router.post("/", auth, async (req, res)=>{
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: "pending",
    userId: req.userId
  })
  await task.save()
  res.send(task)
});


router.get("/", auth, async(req, res)=>{
  const tasks = await Task.find({userId: req.userId})
  res.send(tasks)
});

router.put("/:id", auth, async(req, res)=>{
  await Task.findByIdAndUpdate(req.params.id,req.body)
  res.send("Updated Successfully")
});


router.delete("/:id", auth, async(req, res)=>{
  await Task.findByIdAndDelete(req.params.id)
  res.send("Deleted Successfully")
});

module.exports = router
