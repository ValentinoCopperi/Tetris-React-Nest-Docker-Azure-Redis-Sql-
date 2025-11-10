import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiProperty, ApiResponse } from "@nestjs/swagger";

class HealthResponse {
    @ApiProperty({ description: 'Message of the response', example: 'Ok', type: String })
    message: string;
    @ApiProperty({ description: 'Status of the response', example: 200, type: Number })
    status: number;
    @ApiProperty({ description: 'Time running of the application', example: '1 hour, 30 minutes, 0 seconds', type: String })
    timeRunning: string;
}

const startTime = Date.now();

@Controller()
export class AppController {


    @Get()
    @ApiOperation({ summary: 'Get health of the application' })
    @ApiResponse({ status: 200, description: 'OK', type: HealthResponse })
    getHealth(): HealthResponse {


        const timeRunning = Date.now() - startTime;

        const secondsRunning = timeRunning / 1000;
        const minutesRunning = secondsRunning / 60;
        const hoursRunning = minutesRunning / 60;

        return {
            message: 'Ok',
            status: 200,
            timeRunning: `${hoursRunning.toFixed(2)} hours, ${minutesRunning.toFixed(2)} minutes, ${secondsRunning.toFixed(2)} seconds`,
        };
    }



}
