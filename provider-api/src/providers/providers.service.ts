import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Provider, ProviderDocument } from './schemas/providers.schema';
import { CreateProvidersDto } from './dto/providers.dto';

@Injectable()
export class ProvidersService {
    constructor(@InjectModel(Provider.name) private ProviderModel : Model<ProviderDocument>) {}

    async create(createProvidersDto : CreateProvidersDto) : Promise<Provider> {
        const createdProvider = new this.ProviderModel(createProvidersDto);
        return createdProvider.save();
    }

    async findAll(): Promise<Provider[]> {
        return this.ProviderModel.find().exec();
    }
}
