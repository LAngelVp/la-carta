import { Injectable } from '@angular/core';
import { BebidasInterface, ComidaInterface, ProductsModel } from '../models/products-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  categoriaActual: string = '';
  productosMostrador: any[] = [];
  productos: ProductsModel = {
    comida: [
      {
        id: 1,
        nombre : "Parrilla Yanga",
        presentaciones: [
          {
            nombre_presentacion: "pollo entero",
            descripcion: "Pollo entero con 400 gramos de cecina y arrachera, 1/4 de chistorra, chorizos argentinos, salchichas para asar, acompañado de nopales, cebolla, chiles toreados, arroz, frijoles y salsa.",
            precio: 395
          },
          {
            nombre_presentacion: "medio pollo",
            descripcion: "Pollo entero con 1/4  de cecina, 1/4 de chistorra, chorizos argentinos, salchichas para asar, acompañado de nopales, cebolla, chiles toreados, arroz, frijoles y salsa.",
            precio: 325
          },
        ],
        imagen: "/AsaderoLala/imgs/ParrillaYanga.jpg"
      },
      {
        id: 2,
        nombre : "Carnes Mix Asada",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "Paquete de cecina, arrachera, chistorra, chorizo argentino, salchicas asadera, nopales, cebollitas, chiles toreados, frijoles, salsa y limones.",
            precio: 310
          }
        ],
        imagen: "/AsaderoLala/imgs/CarnesMix1.jpg"
      },
      {
        id: 3,
        nombre : "Costi-Pollo",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "Medio pollo asado, 1/4 de costilla, 1/4 de chistorra, chorizo argentino, salchicas asadera. Acompañado de nopales, cebollitas, chiles toreados, salsa, arroz y frijoles.",
            precio: 310
          }
        ],
        imagen: "/AsaderoLala/imgs/CostiPollo.jpg"
      },
      {
        id: 4,
        nombre : "Costilla Mix",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "Costilla, chistorra, chorizo argentino, salchicas asadera con nopales, chiles toreados, cebollitas, salsa y arroz.",
            precio: 310
          }
        ],
        imagen: "/AsaderoLala/imgs/CostillaMix.jpg"
      },
      {
        id: 5,
        nombre : "Pollo en salsa Macha",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo asado bañado en sala macha 100% casera con el sabor y toque original. Acompañado de arroz y frijoles.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      },
      {
        id: 6,
        nombre : "Costilla de cerdo asada",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "1 kilo de costilla asada acompañada de nopales, cebollitas, chiles toreados, salsa y arroz.",
            precio: 310
          }
        ],
        imagen: "/AsaderoLala/imgs/costillaAsada.jpg"
      },
      {
        id: 7,
        nombre : "Pollo en salsa BBQ",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "Pollo bañado en salsa BBQ acompañado de arroz, frijoles y salsa.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      },
      {
        id: 8,
        nombre : "Mega parrilla yanga",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "Pollo, costilla, carne, chistorra, chorizo argentino, elote, platano asado, nopales, cebollitas, chiles toreados, arroz, salsa y frijoles.",
            precio: 750
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      },
      {
        id: 9,
        nombre : "Pollo a la diabla",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo asado bañado en salsa diabla picosita elaborada con chile seco y secretos culinarios que hacen la salsa muy deliciosa, acompañado de una orden de arroz y una de frijoles.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/PolloALaDiabla1.jpg"
      },
      {
        id: 10,
        nombre : "Pollo a la crema",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo bañado con chiles chipotles en escabeche, jitomate, cebolla rebanada y crema encima.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/polloCrema.png"
      },
      {
        id: 11,
        nombre : "Pollo a la mantequilla",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo asado bañado con mantequilla y papitas cambray, con un sazon unico e inigualable.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/polloMantequilla2.png"
      },
      {
        id: 12,
        nombre : "Pollo en salsa macha cacahuate",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo asado bañado en salsa de cacahuate acompañado de arroz, salsa y frijoles.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      },
      {
        id: 13,
        nombre : "Pollo asado natural",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo asado con nopales, cebolla, chiles toreados, arroz y salsa.",
            precio: 250
          }
        ],
        imagen: "/AsaderoLala/imgs/polloAsadoNatural.jpg"
      },
      {
        id: 14,
        nombre : "Pollo mix especial",
        presentaciones: [
          {
            nombre_presentacion: "Completo",
            descripcion: "Pollo con mas de 250 gramos de chistorra, 2 chorizos argentinos, nopales, cebollitas, chiles toreados, arroz, salsa y frijoles.",
            precio: 295
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      },
      {
        id: 15,
        nombre : "Orden de chistorra",
        presentaciones: [
          {
            nombre_presentacion: "Orden",
            descripcion: "1/4 de chistorra, 2 chorizos argentinos, cebollitas, chiles toreados, nopales, arroz y salsa.",
            precio: 295
          }
        ],
        imagen: "/AsaderoLala/imgs/asaderodoñalala2.jpg"
      }
    ],
    bebidas: [
      {
        id: 1,
        nombre: "Cervezas",
        descripcioGeneral: "Cervezas de la empresa de Cerveceria Moctezuma",
        presentaciones: [
          {
            nombre_presentacion: "Dos X 355ml",
            descripcion: "Cerveza de cristal",
            precio: 28
          },
          {
            nombre_presentacion: "Dos X ambar 355ml",
            descripcion: "",
            precio: 28
          },
          {
            nombre_presentacion: "Indio 355ml",
            descripcion: "",
            precio: 28
          },
          {
            nombre_presentacion: "Carta Blanca 355ml",
            descripcion: "",
            precio: 28
          },
        ],
        imagen: "/AsaderoLala/imgs/moctezumaLogo.png"
      }
    ]
  };

  mostrarProductos(categoria: keyof ProductsModel): Observable<ProductsModel[]> {
    this.categoriaActual = categoria;
    this.productosMostrador = this.productos[categoria] || [];
    return of(this.productosMostrador);
  }

 buscar_producto(dato: string): Observable<Array<ComidaInterface | BebidasInterface>> {
    const texto = dato.toLowerCase();
    return of([
        ...this.productos.comida,
        ...this.productos.bebidas
    ].filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.presentaciones.some(pres => 
            pres.descripcion.toLowerCase().includes(texto)
        )
    ));
}
}
