import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CreatePrice {
  @ApiProperty({ example: 'Замена дисплея', description: 'Название услуги' })
  @IsString({ message: 'должно быть строкой' })
  readonly   title: string

  @ApiProperty({ example: 'Стекло экрана iPhone 13 Pro Max разбито, изображение есть, сенсор работает', description: 'описание повреждений' })
  @IsString({ message: 'должно быть строкой' })
  readonly damage: string

  @ApiProperty({ example: 'Меняем только разбитое стекло, сохраняя вашу оригинальную матрицу. Устанавливаем новую влагозащитную проклейку.', description: 'описание работ' })
  @IsString({ message: 'должно быть строкой' })
  readonly damageWorks: string

  @ApiProperty({ example: '1-2 дня', description: 'примерное время работ' })
  @IsString({ message: 'должно быть строкой' })
  readonly worksTime: string

  @ApiProperty({ example: '60', description: 'гарантия в днях' })
  @IsNumber({}, { message: 'должно быть числом' })
  readonly worksGuard: number


  @ApiProperty({ example: '4900', description: 'Цена услуги' })
  @IsNumber({}, { message: 'должно быть числом' })
  readonly value: number

  @ApiProperty({ example: '1', description: 'id модели' })
  @IsNumber({}, { message: 'должно быть числом' })
  readonly modelID: number

}
