import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Redis } from "ioredis";



@Injectable()
export class RedisService implements OnModuleInit , OnModuleDestroy {

    private client : Redis;
    private readonly logger = new Logger(RedisService.name);

    constructor(){
        this.client = new Redis({
            host: process.env.REDIS_HOST ?? 'redis',
            port: parseInt(process.env.REDIS_PORT ?? '6379'),
        })
    }

    async onModuleInit() {
        try {
            // ioredis se conecta automáticamente, solo verificamos con ping()
            const pong = await this.client.ping();
            this.logger.log(`Conectado a Redis: ${pong}`);
        } catch (error) {
            this.logger.error(`Error al conectar a Redis: ${error}`);
            throw error;
        }
    }

    async onModuleDestroy() {
        await this.client.disconnect();
        this.logger.log('Desconectado de Redis correctamente');
    }


}