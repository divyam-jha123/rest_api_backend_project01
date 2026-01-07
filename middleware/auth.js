const { setUser } = require('../service/auth');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            msg: "Authorisation header not found",
        })
    }

    const token = authHeader.split(" ")[1]; //Bearer <token>

    if (!token) {
        return res.json({
            msg: "No token",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        next();
    } catch(error) {
        return res.status(401).json({
            msg: "Invalid token",
        });
    }


}

module.exports = { authMiddleware };