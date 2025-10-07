import { Product } from "./product.model";

export interface Category {
  name: string;
  comment?: string;
  products?: Product[]
  preparation?: Preparation[];
  price?: number;
  image?:string | null;

}
export interface Preparation{
  name?: string;
  comments?: string;
}
