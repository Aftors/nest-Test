import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { SequelizeModule } from '@nestjs/sequelize'
import { Device } from './model/device.model';
import { DevicePrice } from './model/device-price.model';

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  imports: [SequelizeModule.forFeature([Device, DevicePrice])],
  exports: [DeviceService]
})
export class DeviceModule {}
