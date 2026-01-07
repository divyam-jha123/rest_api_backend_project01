const jwt = require('jsonwebtoken')

const setUser = (user) => {
    const payload = {
        id: user._id,
        Email: user.Email,      
    }    
    return jwt.sign(payload, process.env.JWT_SECRET , {expiresIn: '30d'});
}

module.exports = { setUser };