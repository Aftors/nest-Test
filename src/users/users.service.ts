import { RolesService } from './../roles/roles.service'
import { CreateUserDto } from './dto/create-user.dto'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './model/user.model'
import { AddRoleDto } from '../roles/dto/add-role.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto)
    const role = await this.rolesService.getRoleByValue('dude')
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async getAllUser() {
    const users = await this.userRepository.findAll({ include: { all: true } })
    return users
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    })
    return user
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userId)
    const role = await this.rolesService.getRoleByValue(dto.value)
    if (user && role) {
      await user.$add('role', role.id)
      return dto
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND
    )
  }
}
