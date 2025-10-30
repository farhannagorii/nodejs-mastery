import authModel from "./authModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);

        // ✅ Step 1: Check if user already exists
        const existed = await authModel.findOne({ email });
        if (existed) {
            return res.status(400).json({ success: false, msg: "User already exists" });
        }

        // ✅ Step 2: Hash password (await is mandatory)
        const hashpass = await bcrypt.hash(password, 10);

        // ✅ Step 3: Create new user
        const user = await authModel.create({
            name,
            email,
            password: hashpass,
        });


        // ✅ Step 4: Send response
        res.status(201).json({
            success: true,
            data: { id: user._id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ success: false, msg: "User signup failed" });
    }
};



export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        // Step 1: Check if user exists
        const user = await authModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }

        // Step 2: Compare password
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            return res.status(401).json({ success: false, msg: "Invalid credentials" });
        }

        // Step 3: Create token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_EXPIRES || "1h" }
        );
        res.cookie("token", token, {
            httpOnly: true,       // prevents JS access (security)
            secure: false,        // set true only if using HTTPS
            sameSite: "strict",
            maxAge: 3600000,      // 1 hour
        });
        // Step 4: Return success
        res.status(200).json({
            success: true,
            msg: "Login successful",
            data: {
                user,
                token,
                expiresIn: process.env.JWT_EXPIRES || "1h"
            }
        });

    } catch (error) {
        console.error("Signin error:", error);
        return res.status(500).json({ success: false, msg: "User signin failed" });
    }
};

export const logout = async (req, res) => {
  try {
    // ✅ Step 1: Clear the JWT cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,      // keep false for localhost, true in production (HTTPS)
      sameSite: "strict",
    });

    // ✅ Step 2: Send success response
    return res.status(200).json({
      success: true,
      msg: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      msg: "Logout failed",
    });
  }
};