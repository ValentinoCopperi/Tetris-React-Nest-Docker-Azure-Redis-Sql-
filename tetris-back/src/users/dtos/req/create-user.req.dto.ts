import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    example: 'player.one@tetris.com',
    type: String,
    description: 'Unique email address for the user',
  })
  @IsEmail({}, { message: 'El correo electrónico proporcionado no es válido.' })
  @MaxLength(254, {
    message: 'El correo electrónico no puede superar los 254 caracteres.',
  })
  readonly email: string;

  @ApiProperty({
    example: 'Str0ngP@ssword!',
    type: String,
    minLength: 12,
    maxLength: 64,
    description:
      'Contraseña segura con combinación de mayúsculas, minúsculas, números y caracteres especiales.',
  })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
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
  readonly password: string;
}

