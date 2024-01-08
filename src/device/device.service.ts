import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DevicePrice } from './model/device-price.model';
import { CreatePrice } from './dto/create-price';
import { CreateModel } from './dto/create-model';
import { Device } from './model/Device.model';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(DevicePrice) private priceRepository: typeof DevicePrice,
    @InjectModel(Device) private iphoneRepository: typeof Device,
  ) {}

  async createPrice(dto: CreatePrice) {
    const price = await this.priceRepository.create(dto);
    return price;
  }

  async createModel(dto: CreateModel) {
    const model = await this.iphoneRepository.create(dto);
    return model;
  }

  async getPrice(){
    const allPrice = await this.iphoneRepository.findAll({ include: { all: true } })
    return allPrice
  }

  async getPriceByModel(model: string){
    const allPrice = await this.iphoneRepository.findOne({ where: { model }, include: { all: true } })
    return allPrice
  }

  async getPriceByType(type: string){
    const price = await this.iphoneRepository.findAll({ where: { type }, include: { all: true } })
    return price
  }


}
