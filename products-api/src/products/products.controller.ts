import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
    constructor(private productService : ProductsService) {}

    @Post()
    async create(@Body() createProductDto : CreateProductDto) {
        this.productService.create(createProductDto);
    }

    @Get()
    async findAll() {
        return this.productService.findAll();
    }
}
