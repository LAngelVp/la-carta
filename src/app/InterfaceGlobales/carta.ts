import { Category } from "./category.model";

export interface Carta {
    name?: string;
    comment?: string;
    categorias?: Category[];
}
