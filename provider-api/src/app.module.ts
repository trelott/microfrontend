import { Module } from '@nestjs/common';
import { ProvidersModule } from './providers/providers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProvidersModule,
    MongooseModule.forRoot('mongodb+srv://bistro:plokij@cluster0.s5fch.mongodb.net/?retryWrites=true&w=majority'),
  ]
})
export class AppModule {}
