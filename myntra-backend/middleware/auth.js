const jwt = require("jsonwebtoken");


const secret = "hello123";

exports.signToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.Type,
      email: user.Email,
      name: user.FirstName
    },
   secret,
    { expiresIn: "1d" }
  );
};

/* VERIFY TOKEN (used for protected routes) */
exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // attach user
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};