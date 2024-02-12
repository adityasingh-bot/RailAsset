const jwt = require("jsonwebtoken");
exports.verifyToken = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ response: "Unauthorized : Missing Token" });
     
    }
    token = req.headers.authorization.split(" ")[1];
    // Verify Token if Token Avaialble
    jwt.verify(token, process.env.SECRET_CODE, (err, decoded) => {
      if (err) {
        res.status(401).send({ response: "Unauthorization: Invalid token" });        
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    res.status(500).json({response: "Internal Server Error!"})
  }
};
