import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://bistro:plokij@cluster0.s5fch.mongodb.net/?retryWrites=true&w=majority'),
  ],
})
export class AppModule {}
