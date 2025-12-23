const jwt = require("jsonwebtoken");

module.exports = function (req, res, next){
  const token = req.headers.authorization;
  if(!token){
    return res.status(401).send("No token is given");
  }

  try{
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    next();
  }catch{
    res.status(401).send("Invalid token is received");
  }
};
