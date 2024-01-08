import { RolesModule } from './../roles/roles.module'
import { UserRoles } from './../roles/models/user-role.model'
import { User } from './model/user.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { forwardRef, Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { Role } from 'src/roles/models/roles.model'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [UsersService],
})
export class UsersModule {}
