const { Router } = require("express");


const multer = require("multer");
const uploadConfig = require("../configs/upload");
const upload = multer(uploadConfig.MULTER);
const UserAvatarController = require("../controllers/UserAvatarController");

const UserController = require("../controllers/UserController");


const ensureAuthenticated = require("../middleware/ensureAuthenticated");

const userRoutes = Router();


function myMiddleware(request , response, next){
    console.log("Você passou pelo Middleware");
    

    next();
}


const userAvatarController = new UserAvatarController();

const userController = new UserController();


userRoutes.post("/" , myMiddleware, userController.create);


userRoutes.put("/", ensureAuthenticated ,userController.update);


userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes;
