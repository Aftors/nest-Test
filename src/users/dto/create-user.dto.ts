import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почтовый адресс' })
  @IsString({ message: 'Должен быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string
  @ApiProperty({ example: 'password123', description: 'Пароль' })
  @Length(6, 18, { message: 'Не меньше 6 и не более 18 символов' })
  readonly password: string
}
