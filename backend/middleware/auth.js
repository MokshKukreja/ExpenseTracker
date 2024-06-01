const jwt = require("jsonwebtoken")
const SECRET_KEY = "API";


const auth = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
//   try {
//     // let token = req.headers.authorization;
//     let token =  req.header('auth-token');
//     if (token) {
//        token = token.split(" ")[1];
//        let user = jwt.verify(token,SECRET_KEY)
// req.userId = user.id;
//     }else{
//         res.status(401).send({ error: "Please authenticate using a valid token" })
//     }
//     next()
//   } catch (error) {
//     console.log(error)
//     res.status(401).send({ error: "Please authenticate using a valid token" })

//   }
let token = req.headers.authorization;
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        let user = jwt.verify(token, SECRET_KEY);
        req.userId = user.id;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = auth;