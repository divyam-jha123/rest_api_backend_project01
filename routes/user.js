const express = require("express");
const { handleuserSignup ,handleuserLogin , getAllUserAuthData}  = require('../controllers/UserAuth');
const routes = express.Router();
const user = require("../models/user")
const { getAllDbUser, updateUser, deleteUser, createUser,getDashboardInfo} = require("../controllers/user")
const UserAuthData = require('../models/UserAuth')
const { authMiddleware } = require('../middleware/auth');


routes.post('/signup', handleuserSignup);
routes.post('/login', handleuserLogin);

routes.get('/login', getAllUserAuthData)

routes.get('/dashboard' , authMiddleware , getDashboardInfo)


routes.get("/", getAllDbUser);

routes
  .route("/:id") 
  .patch(updateUser)
  .delete(deleteUser);


routes.post("/", createUser);

module.exports = routes;