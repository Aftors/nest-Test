import { ApiProperty } from '@nestjs/swagger'
import {
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  Table,
} from 'sequelize-typescript'
import { Device } from './device.model'

interface DevicePriceCreationAttrs {
  title: string
  damage: string
  damageWorks: string
  worksTime: string
  worksGuard: number
  value: number
}

@Table({ tableName: 'device-price' })
export class DevicePrice extends Model<DevicePrice, DevicePriceCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'Замена модуля', description: 'название' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string

  @ApiProperty({ example: 'Стекло экрана iPhone 13 Pro Max разбито, изображение есть, сенсор работает', description: 'описание повреждений' })
  @Column({ type: DataType.STRING, allowNull: false })
  damage: string

  @ApiProperty({ example: 'Меняем только разбитое стекло, сохраняя вашу оригинальную матрицу. Устанавливаем новую влагозащитную проклейку.', description: 'описание работ' })
  @Column({ type: DataType.STRING, allowNull: false })
  damageWorks: string

  @ApiProperty({ example: '1-2 дня', description: 'примерное время работ' })
  @Column({ type: DataType.STRING, allowNull: false })
  worksTime: string


  @ApiProperty({ example: '60', description: 'гарантия в днях' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  worksGuard: number

  @ApiProperty({ example: '5900', description: 'Цена услуги' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  value: Number


  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER, allowNull: false })
  modelID: number

  @BelongsTo(() => Device)
  device: Device[]
}
