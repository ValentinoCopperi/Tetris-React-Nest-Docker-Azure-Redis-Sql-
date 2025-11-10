

import { PrismaClient } from "generated/prisma/client";
import { Logger } from "@nestjs/common";


const prisma = new PrismaClient();
const logger = new Logger('Seed Generator');

const users = [
    {
        email: "test@test.com",
        password: "test123"
    },
    {
        email: "test2@test.com",
        password: "test123"
    },
    {
        email: "test3@test.com",
        password: "test123"
    }
]

export class Seed {

    static async deleteUsers() {
        await prisma.user.deleteMany();
        logger.warn('Usuarios eliminados correctamente');
    }


    static async execute() {
        const count = await prisma.user.count();
        if (count > 0) {
            logger.warn('Usuarios ya existen, no se crean nuevos');
            return;
        }
        logger.warn(`Creando ${users.length} usuarios...`);
        await prisma.user.createMany({
            data: users
        });
        logger.warn(`${users.length} usuarios creados correctamente`);
    }
}




