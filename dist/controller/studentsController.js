"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsController = void 0;
const prisma_client_1 = require("../databases/prisma-client");
exports.studentsController = {
    findUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const students = yield prisma_client_1.prisma.students.findMany();
        if (!students) {
            res.status(404).json({ message: 'No students found' });
        }
        res.status(200).json(students);
    }),
};
