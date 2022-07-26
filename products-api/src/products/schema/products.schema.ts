import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    'nameProduct' : string;
    
    @Prop()
    'price' : number;
    
    @Prop()
    '_idProvider' : string;
    
    @Prop()
    'inventory' : number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);