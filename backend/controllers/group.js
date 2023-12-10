const Group = require("../models/group");
const User = require("../models/user");
const { use } = require("../routes/group");

module.exports.create = async (req, res) => {
  try {
    const sz = req.body.participants.length;
    let arr = [];
    for (let i = 0; i < req.body.participants.length; i++) {
      
      let data = await User.findOne({
        email: req.body.participants[i],
      }).select("_id name email");
      const newfield = {id:data._id,name:data.name,email:data.email,total :(req.body.total)/sz,balance : [(req.body.total)/sz] };
           arr.push(newfield);
    }
    let newGroup = await Group.create({
      name : req.body.name,
      description: req.body.description,
      category: req.body.category,
      created_by: req.body._id,
      creater_mail: req.body.email,
      total : req.body.total,
      members: arr,
    });
    await newGroup.save();
    for(let i=0;i<arr.length;i++){
      const data = await User.findOne({_id : arr[i].id});
      // if(data)
      console.log(data)
      data.groups.push({id : newGroup._id});
      await data.save();
    }
    return res.status(200).json({ message: "success", list: newGroup });
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in creating group");
  }
};

module.exports.getGroups = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.body._id });
    // console.log(user)
    if (!user) {
      return res.status(422).json({
        message: "No expense added yet.",
      });
    }
    let arr = [];
    for(let i=0;i<user.groups.length;i++){
        const id =  user.groups[i].id.toString();
        // console.log(id);
        const data = await Group.findOne({_id :id});
        if(data)arr.push(data);
    }
    return res.status(200).json({
      message: "success",
      arr,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in getting groups");
  }
};
