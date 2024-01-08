import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreateModel {
  @ApiProperty({ example: '11', description: 'Название модели' })
  @IsString({ message: 'должно быть строкой' })
  readonly   model: string

  @ApiProperty({ example: 'iphone', description: 'Тип модели - iphone, macbook итд' })
  @IsString({ message: 'должно быть строкой' })
  readonly   type: string

}
