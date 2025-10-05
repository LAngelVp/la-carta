import { Product } from "./product.model";

export interface CategoriaProducto {
      name: string;
      comment?: string;
      products: Product[]
      preparation?: Preparation[];
}

export interface Preparation{
  name?: string;
  comments?: string;
}