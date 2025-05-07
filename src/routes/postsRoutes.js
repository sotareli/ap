import express from "express";
import PostControler from "../controllers/postControler.js";

const routes = express.Router();

routes.get("/posts", PostControler.listarPosts);

export default routes;