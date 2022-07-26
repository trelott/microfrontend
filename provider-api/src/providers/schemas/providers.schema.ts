import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProviderDocument = Provider & Document;

@Schema()
export class Provider {
    @Prop()
    "name" : string;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);