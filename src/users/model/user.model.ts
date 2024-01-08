import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript'
import { Role } from 'src/roles/models/roles.model'
import { UserRoles } from 'src/roles/models/user-role.model'

interface UserCreationAttrs {
  email: string
  password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number
  @ApiProperty({ example: 'user@mail.ru', description: 'Уникальная почта' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string
  @ApiProperty({ example: 'password123', description: 'Пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}
