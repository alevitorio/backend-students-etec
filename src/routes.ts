import { Router } from "express";
import { studentsController } from "./controller/studentsController";
import { gitController } from "./controller/gitController";

 const routes = Router();

 routes.get('/students',studentsController.findUser)
 routes.get("/auth/github",gitController.auth);
routes.get("/auth/github/callback",gitController.callback);

export default routes;




