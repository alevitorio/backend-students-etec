"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = require("./controller/studentsController");
const gitController_1 = require("./controller/gitController");
const routes = (0, express_1.Router)();
routes.get('/students', studentsController_1.studentsController.findUser);
routes.get("/auth/github", gitController_1.gitController.auth);
routes.get("/auth/github/callback", gitController_1.gitController.callback);
exports.default = routes;
