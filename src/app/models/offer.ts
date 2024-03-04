import { Category } from "./category";
import { Comercio } from "./comercio";
import { Promocion } from "./promocion";

export interface Offer {
    category:Category,
    comercio:Comercio,
    description:string,
    imgUrl:string,
    promocion:Promocion,
    valorUnidad:number
    _id:string,
}



