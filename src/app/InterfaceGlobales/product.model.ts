import { Adiciones } from "./adiciones";
import { Ingredientes } from "./ingredientes";
import { Presentation } from "./presentation.model";
import { Size } from "./size.model";

export interface Product {
  name?: string;
  comment?: string;
  ingredients?: string | Ingredientes[];
  sizes?: Size[]
  presentations?: Presentation[] | undefined; 
  grammage?: string; 
  price?: number;
  adiciones?: Adiciones[];
  image?: string | null;
}
