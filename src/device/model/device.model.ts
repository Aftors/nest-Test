import { ApiProperty } from '@nestjs/swagger'
import {
  Column,
  DataType,
  Model,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript'
import { DevicePrice } from './device-price.model'

interface DeviceCreationAttrs {
  model: string,
  type: string
}

@Table({ tableName: 'device' })
export class Device extends Model<Device, DeviceCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'iPhone 11', description: 'Уникальное значение модели' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  model: string

  @ApiProperty({ example: 'iphone', description: 'Тип устройства - телефон, планшет итд' })
  @Column({ type: DataType.STRING, allowNull: false })
  type: string

  @HasMany(() => DevicePrice)
  price: DevicePrice[]
}
