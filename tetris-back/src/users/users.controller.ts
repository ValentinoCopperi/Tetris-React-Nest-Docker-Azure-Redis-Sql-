import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import {
  UserEnvelopeResponseDto,
  UserResponseDto,
} from './dtos/res/users.res.dto';
import { CreateUserRequestDto } from './dtos/req/create-user.req.dto';
import { UpdateUserRequestDto } from './dtos/req/update-user.req.dto';

@ApiTags('users')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  }),
)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Listar usuarios registrados' })
  @ApiOkResponse({
    description: 'Listado de usuarios sin información sensible.',
    type: UserResponseDto,
    isArray: true,
  })
  async getUsers(): Promise<UserResponseDto[]> {
    return this.usersService.getUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiCreatedResponse({
    description: 'Usuario creado exitosamente.',
    type: UserEnvelopeResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Los datos enviados no cumplen con las reglas de validación.',
  })
  @ApiConflictResponse({
    description: 'Correo electrónico ya registrado.',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Formato de solicitud inválido.',
  })
  async createUser(
    @Body() body: CreateUserRequestDto,
  ): Promise<UserEnvelopeResponseDto> {
    return this.usersService.createUser(body);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Actualizar parcialmente un usuario existente' })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Identificador único del usuario.',
    example: '6ff7c2be-93cb-4a2a-a8f6-129f53aedc0a',
  })
  @ApiOkResponse({
    description: 'Usuario actualizado exitosamente.',
    type: UserEnvelopeResponseDto,
  })
  @ApiBadRequestResponse({
    description:
      'Solicitud inválida. Puede deberse a campos faltantes o identificador inválido.',
  })
  @ApiConflictResponse({
    description: 'Correo electrónico ya registrado.',
  })
  @ApiUnprocessableEntityResponse({
    description: 'Formato de solicitud inválido.',
  })
  async updateUser(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: UpdateUserRequestDto,
  ): Promise<UserEnvelopeResponseDto> {
    return this.usersService.updateUser(id, body);
  }
}
