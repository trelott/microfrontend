import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/products.schema';
import { CreateProductDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private ProductModel : Model<ProductDocument>) {}

    async create(createProductDto : CreateProductDto) : Promise<Product> {
        const createdProduct = new this.ProductModel(createProductDto);
        return await createdProduct.save();
    }

    async findAll() : Promise<Product[]> {
        return await this.ProductModel.find().exec();
    }

}
