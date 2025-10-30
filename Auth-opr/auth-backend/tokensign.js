

// ✅ authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // Step 1️⃣ — Extract token from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "Access denied. No token provided.",
      });
    }

    // Step 2️⃣ — Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)

    // Step 3️⃣ — Attach decoded data (like user ID) to req object
    req.user = decoded;

    // Step 4️⃣ — Pass control to next middleware or controller
    next();

  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(403).json({
      success: false,
      msg: "Invalid or expired token.",
    });
  }
};