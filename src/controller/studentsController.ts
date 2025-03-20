import { prisma } from "../databases/prisma-client";
import { Request, Response } from 'express';


export const studentsController = {
    findUser: async (req: Request, res: Response) => {

        const students = await prisma.students.findMany()
        if (!students) {
            res.status(404).json({ message: 'No students found' });
        }
        res.status(200).json(students);

    },

}

