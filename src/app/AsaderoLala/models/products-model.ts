export interface ProductsModel {
    comida : ComidaInterface[];
    bebidas : BebidasInterface[];
}
export interface ComidaInterface{
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
export interface BebidasInterface{
    id: number;
    nombre: string;
    presentaciones: Presentaciones[];
    imagen: string;
}