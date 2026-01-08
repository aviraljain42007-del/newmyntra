const jwt = require("jsonwebtoken");


const secret = "hello123";

exports.signToken = (userj) => {
  return jwt.sign(
    {
      id: userj._id,
      role: userj.Type,
      email: userj.Email,
      name: userj.FirstName
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