const jwt = require("jsonwebtoken");
const SECRET = "HOD";

const generateToken = () => {
  const token = jwt.sign(payload, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = () => {};

module.exports = { generateToken, validateToken };