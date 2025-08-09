export interface ProductsModel {
    id : number;
    nombre : string;
    presentaciones : Presentaciones[];
    imagen: string;
}
export interface Presentaciones {
    presentacion: string;
    descripcion: string;
    precio: number;
}
