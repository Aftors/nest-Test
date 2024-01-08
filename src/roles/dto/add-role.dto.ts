import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Название роли' })
  @IsString({ message: 'должно быть строкой' })
  readonly value: string
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @IsNumber({}, { message: 'должно быть числом' })
  readonly userId: number
}
