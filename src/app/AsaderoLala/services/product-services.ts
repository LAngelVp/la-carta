import { Injectable } from '@angular/core';
import { ProductsModel } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  private productos: ProductsModel[] = [
    {
      id: 1,
      nombre : "Parrilla Yanga",
      presentaciones: [
        {
          presentacion: "pollo entero",
          descripcion: "Pollo entero con 400 gramos de cecina y arrachera, 1/4 de chistorra, chorizos argentinos, salchichas para asar, acompañado de nopales, cebolla, chiles toreados, arroz, frijoles y salsa.",
          precio: 395
        },
        {
          presentacion: "medio pollo",
          descripcion: "Pollo entero con 1/4  de cecina, 1/4 de chistorra, chorizos argentinos, salchichas para asar, acompañado de nopales, cebolla, chiles toreados, arroz, frijoles y salsa.",
          precio: 325
        },
      ],
      imagen: "/AsaderoLala/imgs/PolloMix.jpg"
    }
  ];

  get_producto(): ProductsModel[]{
    return this.productos;
  }
}
