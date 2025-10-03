import { Presentation } from "./presentation.model";
import { Size } from "./size.model";

export interface Product {
  name?: string;
  comment?: string;
  ingredients?: string;
  sizes?: Size[]
  presentations?: Presentation[] | undefined; 
  grammage?: string; 
  price?: number;
  image?: string | null;
}
