import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Victor Caio',
    description: 'Name is used to name the user.',
  })
  name: string;

  @ApiProperty({
    example: 'teste@email.com',
    description: 'Email is used to login.',
  })
  email: string;

  @ApiProperty({
    example: '967a8fe86251d5139de224cb287d18d866f49698c6b37b0b3a61ca98f29c9bea',
    description:
      'Password is used to login. Only the password hash is saved, for login it is necessary to compare it.',
  })
  password: string;
}
