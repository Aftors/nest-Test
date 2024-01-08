import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateRoleDto {
  @ApiProperty({ example: 'master', description: 'Название роли' })
  @IsString({ message: 'должно быть строкой' })
  readonly value: string
  @ApiProperty({
    example: 'пока не понятно',
    description: 'Описание роли роли',
  })
  @IsString({ message: 'должно быть строкой' })
  readonly description: string
}
