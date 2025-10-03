import { Price } from "./price.model";

export interface Presentation {
  name: string | undefined;
  price?: number;
  ingredients?: string;
  comment?: string;
  grammage?: string;
  prices?: Price[] | number;
}
