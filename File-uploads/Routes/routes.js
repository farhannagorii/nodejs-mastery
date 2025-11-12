import express from "express";


import upload from "../Multer/multer.js";
import fs from "fs";
import cloudinary from "../cloudinary/cloudinary.js";
import User from "../Models/model.js";


const router = express.Router();

// Upload profile image
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name, email } = req.body;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "File-uploads",
    });

    // Create user in DB
    const user = await User.create({
      name,
      email,
      profileImage: result.secure_url,
    });

    // Delete local file
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      message: "User created successfully!",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
});

export default router;