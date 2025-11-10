import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: '6ff7c2be-93cb-4a2a-a8f6-129f53aedc0a', type: String })
  id: string;

  @ApiProperty({ example: 'player@tetris.com', type: String })
  email: string;

  @ApiProperty({ example: '2024-10-02T12:30:12.123Z', type: String, format: 'date-time' })
  createdAt: Date;

  @ApiProperty({ example: '2024-10-02T12:30:12.123Z', type: String, format: 'date-time' })
  updatedAt: Date;
}

export class UserEnvelopeResponseDto {
  @ApiProperty({ example: 201, type: Number })
  status: number;

  @ApiProperty({ example: 'User created successfully', type: String })
  message: string;

  @ApiProperty({ type: () => UserResponseDto })
  data: UserResponseDto;
}