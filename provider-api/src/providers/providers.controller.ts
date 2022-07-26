import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProvidersDto } from './dto/providers.dto';
import { ProvidersService } from './providers.service';
import { Provider } from './schemas/providers.schema';

@Controller('providers')
export class ProvidersController {
    constructor(private providersService : ProvidersService) {}

    @Post()
    async create(@Body() createProvidersDto: CreateProvidersDto) {
        this.providersService.create(createProvidersDto);
    }

    @Get()
    async findAll(): Promise<Provider[]> {
        return this.providersService.findAll();
    }

}
