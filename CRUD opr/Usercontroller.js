import User from "./Usermodel.js"


export let usercreate = async (req, res) => {

    try {
        let { name, age, email, phone } = req.body;

        let user = await User.create({
            name,
            age,
            email,
            phone
        })
        res.status(200).json({
            msg: "User created successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            msg: "User creation failed",
            error: error.message
        });
    }

}

export let viewuser = async (req, res) => {

    try {
        
        let userview = await User.find()
        res.status(200).json({
            msg: "User view successfully",
            userview
        });

    } catch (error) {
        res.status(400).json({
            msg: "User view failed",
            error: error.message
        });
    }
}


export let deleteuser = async (req, res) => {
    try {
        let { id } = req.params;

        let deletedUser = await User.findOne(id);

        if (!deletedUser) {
            return res.status(404).json({
                msg: "User not found",
            });
        }

        res.status(200).json({
            msg: "User deleted successfully",
            deletedUser,
        });
    } catch (error) {
        res.status(400).json({
            msg: "User delete failed",
            error: error.message,
        });
    }
};


export let updateuser = async (req, res) => {
  try {
    let { uid } = req.params;
    let updateData = req.body; // Can include name, age, phone, etc.

    let updatedUser = await User.findByIdAndUpdate(uid, updateData, {
      new: true,        

    });

    if (!updatedUser) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    res.status(200).json({
      msg: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      msg: "User update failed",
      error: error.message,
    });
  }
};