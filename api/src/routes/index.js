
const { Router } = require("express");

const usersRouter = require("./user.routes")

const notesRoutes = require("./notes.routes")

const tagsRoutes = require("./tags.routes")

const sessionRoutes = require("./session.routes")

const routes = Router();

routes.use("/users", usersRouter);


routes.use('/session', sessionRoutes);

routes.use('/notes', notesRoutes);


routes.use('/tags', tagsRoutes);



module.exports = routes;