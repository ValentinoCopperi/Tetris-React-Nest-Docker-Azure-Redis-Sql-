import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserRequestDto {
  @ApiPropertyOptional({
    example: 'updated.player@tetris.com',
    type: String,
    description: 'Nuevo correo electrónico único para el usuario.',
  })
  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico proporcionado no es válido.' })
  @MaxLength(254, {
    message: 'El correo electrónico no puede superar los 254 caracteres.',
  })
  readonly email?: string;

  @ApiPropertyOptional({
    example: 'N3wStr0ngP@ss!',
    type: String,
    minLength: 12,
    maxLength: 64,
    description:
      'Contraseña segura con combinación de mayúsculas, minúsculas, números y caracteres especiales.',
  })
  @IsOptional()
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(12, {
    message: 'La contraseña debe tener al menos 12 caracteres.',
  })
  @MaxLength(64, {
    message: 'La contraseña no puede superar los 64 caracteres.',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/, {
    message:
      'La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales.',
  })
  readonly password?: string;
}

