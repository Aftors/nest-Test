import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DeviceService } from './device.service'
import { CreatePrice } from './dto/create-price'
import { CreateModel } from './dto/create-model'


@ApiTags('Device')
@Controller('device')
export class DeviceController {
    constructor(private deviceService: DeviceService) {}

  @ApiOperation({ summary: 'Создать услугу' })
  @Post('/addPrice')
  addPrice(@Body() dto: CreatePrice) {
    return this.deviceService.createPrice(dto)
  }

  @ApiOperation({ summary: 'Добавить модель iphone' })
  @Post('/createModel')
  addModel(@Body() dto: CreateModel) {
    return this.deviceService.createModel(dto)
  }

  @ApiOperation({ summary: 'Получить все услуги и цены' })
  @Get('/price')
  getAllPrice(){
      return this.deviceService.getPrice()
  }

  @ApiOperation({ summary: 'Получить услуги и цены по названию модели' })
  @Get('/price/model/:model')
  getPrice(@Param('model') model: string){
      return this.deviceService.getPriceByModel(model)
  }

  @ApiOperation({ summary: 'Получить услуги и цены по типу устройства' })
  @Get('/price/:type')
  getPriceType(@Param('type') type: string){
      return this.deviceService.getPriceByType(type)
  }

}
