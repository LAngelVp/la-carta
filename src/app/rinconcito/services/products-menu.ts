import { Injectable } from '@angular/core';
import { Category } from '../../InterfaceGlobales/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsMenu {
  Menu: Category[] = [
      {
        name: "Entradas",
        products: [
          {
            name: "COCTELES",
            comment: "",
            presentations: [
              {
                name: "Camarón"
              },
              {
                name: "Pulpo"
              },
              {
                name: "Jaiba"
              },
              {
                name: "Caracol"
              }
            ],
            sizes: [
              {
                name: "Chico",
                price: 85
              },
              {
                name: "Grande",
                price: 135
              },
              {
                name: "Vuelve a la vida",
                price: 215
              },
              {
                name: "Bola de Camarón",
                price: 215
              }
            ],
            image: null
          },
          {
            name: "TACOS",
            comment: "(Orden de 2 Piezas)",
            presentations: [
              {
                name: "Pescado",
                price: 140
              },
              {
                name: "Camarón",
                price: 140
              },
              {
                name: "Mixtos",
                price: 140
              }
            ],
            image: null
          },
          {
            name: "TOSTADAS",
            comment: "(Orden de 3 Piezas)",
            presentations: [
              {
                name: "Cazón",
                price: 90
              },
              {
                name: "Camarón",
                price: 145
              },
              {
                name: "Jaiba",
                price: 105
              },
              {
                name: "Pulpo",
                price: 250
              },
              {
                name: "Mixtas",
                price: 120,
                ingredients: "(Camarón, Cazón, Jaiba)"
              },
              {
                name: "Supremas",
                price: 195,
                ingredients: "(Cazón, Camarón, Jaiba, Pulpo)"
              }
            ],
            image: null
          },
          {
            name: "ENSALADAS",
            comment: "Mariscos - Camarón",
            ingredients: "(Camarón, Pulpo y Jaiba)",
            sizes: [
              {
                name: "Chica",
                price: 145
              },
              {
                name: "Mediana",
                price: 210
              },
              {
                name: "Grande",
                price: 305
              }
            ],
            image: null
          },
          {
            name: "CAMARONES PARA PELAR",
            comment: "",
            sizes: [
              {
                name: "1 KG",
                price: 570
              },
              {
                name: "1/2 KG",
                price: 310
              },
              {
                name: "Orden",
                price: 160
              }
            ],
            image: null
          },
          {
            name: "ARROZ CON CAMARONES",
            comment: "",
            price: 120,
            image: null
          }
        ]
      },
      {
        name: "Recomendaciones",
        products: [
          {
            name: "Langostinos al mojo de ajo",
            comment: "Orden",
            price: 450
          },
          {
            name: "Langostinos enchipotlados",
            comment: "Orden",
            price: 450
          },
          {
            name: "Agua chile de camarón",
            comment: "Orden",
            price: 310
          },
          {
            name: "Chilpachole de robalo con langostinos",
            price: 595
          },
          {
            name: "Mojarra al chile limón",
            comment: "Costo en base al tamaño (solicitar)",
          },
          {
            name: "Fetuccini con camarones",
            price: 260
          },
          {
            name: "Hamburguesa de camarón",
            price: 230
          },
          {
            name: "Queso fundido con camarones",
            price: 290
          },
          {
            name: "Torre de mariscos",
            price: 410
          },
        ]
      },
      {
        name: "Chilpacholes",
        products: [
          {
            name: "CHILPACHOLES",
            comment: "EN CASO DE REQUERIR SU CHILPACHOLE SIN PICANTE, FAVOR DE AVISAR",
            presentations: [
              {
                name: "Camarón",
                prices: [
                  {
                    ingredient: "Pulpa",
                    price: 195
                  },
                  {
                    ingredient: "Cascara",
                    price: 180
                  }
                ]
              },
              {
                name: "1/2 Orden Chilpachole de Camarón",
                prices: [
                  {
                    ingredient: "Pulpa",
                    price: 130
                  },
                  {
                    ingredient: "Cascara",
                    price: 120
                  }
                ]
              },
              {
                name: "Langostinos",
                price: 450
              },
              {
                name: "Camarón C/ Pulpa de Jaiba",
                price: 205
              },
              {
                name: "Camarón C/ Robalo",
                price: 240
              },
              {
                name: "Cazuela de Mariscos Gratinada",
                price: 245,
                ingredients: "(Camarón y Jaiba en Pulpa, Caracol, Pulpo, Quesos y Crema)"
              },
              {
                name: "Sopa de Mariscos",
                price: 245,
                ingredients: "(Camarón, Pulpo, Pulpa de Jaiba, Robalo)"
              },
              {
                name: "Cabeza de Robalo",
                price: 220
              },
              {
                name: "Cabeza y Rebanada de Robalo",
                price: 230
              },
              {
                name: "Pulpa de Jaiba",
                price: 195
              },
              {
                name: "Camarón con Pulpo",
                price: 250
              },
              {
                name: "Arroz a la Tumbada",
                price: 250,
                ingredients: "(Camarón y Jaiba en Pulpa, Filete y Pulpo)"
              },
              {
                name: "Rebanada de Robalo",
                price: 230
              },
              {
                name: "Mojarra (Mediana)",
                price: 265
              },
              {
                name: "Chucumite (Chico)",
                price: 345
              },
              {
                name: "Pulpa de Jaiba con Robalo",
                price: 210
              },
              {
                name: "Langostino con Robalo",
                price: 595
              }
            ],
            image: null
          }
        ]
      },
      {
        name: "CAMARONES",
        products: [
          {
            name: "Empanizados",
            price: 245,
            ingredients: "(Ensalada, Papas y Arroz)"
          },
          {
            name: "Rellenos de Queso C/Tocino",
            price: 320,
            ingredients: "(Ensalada, Papas y Arroz)"
          },
          {
            name: "Al Coco",
            price: 275,
            ingredients: "(Salsa de Tamarindo y Arroz)"
          },
          {
            name: "Orden en Pulpa",
            price: 215
          },
          {
            name: "Orden de Cáscara",
            price: 190
          }
        ],
        preparation: [
          {
            name: "Al Mojo de Ajo"
          },
          {
            name: "A la Mantequilla"
          },
          {
            name: "Al Ajillo"
          },
          {
            name: "Enchipotlados"
          },
          {
            name: "Al Mojo de Ajo con Habanero"
          },
          {
            name: "En Salsa de la Casa (Chipotle y Crema)"
          },
          {
            name: "A la Chilpaya"
          },
          {
            name: "A la Diabla (Pasta de Ajo con Salsa Macha)"
          },
          {
            name: "A la Diabla Gratinados (Chipotle, Queso)"
          }
        ]
      },
      {
        name: "PESCADOS",
        comment: "Acompañalos de la sazón de tu preferencia",
        products: [
          {
            name: "Mojarra",
            presentations: [
              {
                name: "Chica",
                grammage: "(500 - 550 gramos)",
                price: 195
              },
              {
                name: "Mediana",
                grammage: "(570 - 650 gramos)",
                price: 230
              },
              {
                name: "Grande",
                grammage: "(680 - 750 gramos)",
                price: 290
              },
              {
                name: "Jumbo",
                grammage: "(780 - 900 gramos)",
                price: 320
              },
            ],
          },
          {
            name: "Rebanadas de robalo",
            presentations: [
              {
                name: "Chica",
                grammage: "(200 - 250 gramos)",
                price: 180
              },
              {
                name: "Mediana",
                grammage: "(270 - 320 gramos)",
                price: 235
              },
              {
                name: "Grande",
                grammage: "(340 - 400 gramos)",
                price: 290
              }
            ],
          },
          {
            name: "Chucumites",
            presentations: [
              {
                name: "Chico",
                grammage: "(460 - 550 gramos)",
                price: 320
              },
              {
                name: "Mediano",
                grammage: "(580 - 670 gramos)",
                price: 370
              },
              {
                name: "Grande",
                grammage: "(700 - 800 gramos)",
                price: 445
              },
              {
                name: "Jumbo",
                grammage: "(830 - 950 gramos)",
                price: 495
              }
            ],
          },
        ],
        preparation: [
          {
            name: "Al mojo de ajo",
            comments: "ajos fritos o pasta de ajo"
          },
          {
            name: "A la diabla",
            comments: "pasta de ajo y salsa macha"
          },
          {
            name: "Al chile limón"
          },
          {
            name: "Chipotle"
          },
          {
            name: "A la chilpaya"
          },
          {
            name: "A la veracruzana"
          },
          {
            name: "Empapelado",
            comments: "En salsa verde o a la mexicana"
          },
        ]
      },
      {
        name: "La especialidad",
        products: [
          {
            name: "Langostino en chilpachole",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino al mojo de ajo",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino enchipotlados",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino a la mantequilla",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino a la diabla",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino en salsa verde",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino a la chilpaya",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
          {
            name: "Langostino al mojo de ajo con habanero",
            presentations: [
              {
                name: "1 kg",
                price: 1485
              },
              {
                name: "1/2 kg",
                price: 775
              },
              {
                name: "1 orden",
                price: 450
              },
            ],
            image: "/elRinconcito/imgs/langostinosMojoAjo.jpg"
          },
        ]
      },
      {
        name: "Lo imperdible",
        products: [
          {
            name: "Torta de mariscos",
            price: 175 
          },
          {
            name: "Torta de camarón",
            price: 175 
          },
          {
            name: "Chile relleno de mariscos",
            price: 175 
          },
          {
            name: "Chile relleno de camarón",
            price: 175 
          },
        ]
      },
      {
        name : "Filetes",
        comment: "Acompañados con ensalada y arroz",
        products: [
          {
            name: "Empanizado",
            comment: "Ensalada, arroz y papas",
            price: 230
          },
          {
            name: "A la plancha",
            comment: "Verduras, arroz y ensalada",
            price: 210
          },
          {
            name: "A la diabla",
            price: 210
          },
          {
            name: "Enchipotlado",
            price: 210
          },
          {
            name: "A la veracruzana",
            price: 210
          },
          {
            name: "Al mojo de ajo",
            price: 210
          },
          {
            name: "A la chilpaya",
            price: 210
          },
          {
            name: "Relleno de mariscos",
            comment: "Camarón, pulpo y jaiba",
            price: 245
          },
          {
            name: "Relleno de camarón",
            comment: "arroz y pico de gallo",
            price: 245
          },
        ]
      },
      {
        name: "Orden de jaiba en pulpa",
        products: [
          {
            name: "Chilpaya",
            price: 225
          },
          {
            name: "Al mojo de ajo con habanero",
            price: 225
          },
        ]
      },
      {
        name: "Revoltijo de mariscos",
        products: [
          {
            name: "Orden de Revoltijo de mariscos",
            comment: "Camarón en pulpa, caracol y pulpo",
            price: 280
          }
        ]
      },
      {
        name: "Orden de pulpos",
        products: [
          {
            name: "Orden de pulpos",
            presentations: [
              {
                name: "Al mojo de ajo",
              },
              {
                name: "Enchipotlados"
              },
              {
                name: "A la mantequilla"
              },
              {
                name: "A la chilpaya"
              },
              {
                name: "A la diabla"
              },
              {
                name: "Encebollados"
              }
            ],
            sizes: [
              {
                name: "Orden",
                price: 285
              }
            ]
          },
        ]
      },
      {
        name: "Carnes",
        products: [
          {
            name: "Bistec asado",
            comment: "Ensalada, arroz y frijoles",
            price: 165
          },
          {
            name: "Arrachera",
            comment: "pico de gallo, arroz, frijoles y papas",
            price: 290
          },
          {
            name: "Tampiqueña",
            comment: "Ensalada, arroz, platano frito, frijoles, papas, 2 enchiladas",
            price: 230
          },
          {
            name: "Tampiqueña con arrachera",
            price: 310
          },
          {
            name: "Milanesa de pollo",
            comment: "papas, arroz y ensalada",
            price: 195
          },
          {
            name: "Milanesa de res",
            comment: "papas, arroz y ensalada",
            price: 230
          },
        ]
      },
      {
        name: "Guarniciones",
        comment: "No se hacen cambios en las guarniciones. Todos los platillos son elaborados al momento, en un tiempo aproximado de 25 minutos.",
        products: [
          {
            name : "Orden de papas a la francesa",
            price: 75
          },
          {
            name : "Porción de papas a la francesa",
            price: 40
          },
          {
            name : "Orden de frijoles",
            price: 45
          },
          {
            name : "Orden de pico de gallo",
            price: 30
          },
          {
            name : "Orden de guacamole",
            price: 75
          },
          {
            name : "Orden de totopos",
            price: 20
          },
        ]
      },
      {
        name: "Para los niños",
        products: [
          {
            name: "Nuggets de pollo",
            comment: "Incluye una porción de papas",
            price: 150
          },
          {
            name: "Hamburguesa",
            comment: "Incluye una porción de papas",
            price: 175
          },
        ]
      },
      {
        name: "Arroz",
        products: [
          {
            name: "Arroz natural",
            comment: "Porción",
            price: 30
          },
          {
            name: "Arroz con platanos fritos",
            comment: "Porción",
            price: 60
          },
        ]
      },
      { 
        name: "Bebidas",
        products: [
          {
            name: "AGUAS",
            comment: "Sabores Horchata y Jamaica",
            sizes: [
              {
                name: "Vaso (600 ml.)",
                price: 45
              },
              {
                name: "Jarra (1.800 l.)",
                price: 110
              }
            ],
            image: null
          },
          {
            name: "PREPARADOS MINERALES",
            comment: "",
            presentations: [
              {
                name: "Limonada Mineral (600 ml)",
                price: 65
              },
              {
                name: "Tehuacan Preparado",
                price: 65,
                ingredients: "(Limón y Sal)"
              },
              {
                name: "Jarra Limón Mineral (1.800 l)",
                price: 175
              }
            ],
            image: null
          },
          {
            name: "REFRESCOS",
            comment: "",
            presentations: [
              {
                name: "Coca Cola",
                price: 45
              },
              {
                name: "Coca Cola Light/Zero",
                price: 45
              },
              {
                name: "Sidral Mundet",
                price: 45
              },
              {
                name: "Agua Mineral",
                price: 45
              },
              {
                name: "Squirt",
                price: 45
              },
              {
                name: "Orange",
                price: 45
              },
              {
                name: "Jugo del Valle",
                price: 45
              }
            ],
            image: null
          },
          {
            name: "CAFÉ / TÉ",
            comment: "",
            presentations: [
              {
                name: "Americano",
                price: 45
              },
              {
                name: "Lechero",
                price: 69
              },
              {
                name: "Espresso",
                price: 35
              },
              {
                name: "Capuccino",
                price: 50
              },
              {
                name: "Té (Sabores)",
                price: 35
              }
            ],
            image: null
          },
          {
            name: "CERVEZAS",
            comment: "",
            presentations: [
              {
                name: "Corona / Victoria / Pacífico",
                price: 45
              },
              {
                name: "Ultra",
                price: 45
              },
              {
                name: "Cerveza Zero",
                price: 45
              },
              {
                name: "Negra Modelo",
                price: 60
              },
              {
                name: "Modelo Especial",
                price: 60
              }
            ],
            image: null
          },
          {
            name: "TARROS PREPARADOS",
            comment: "",
            presentations: [
              {
                name: "Michelada",
                price: 40,
                ingredients: "(Limón, Salsas, Clamato)"
              },
              {
                name: "Michelada C/Camarones",
                price: 125
              },
              {
                name: "Chelada",
                price: 25
              },
              {
                name: "Chelato",
                price: 35
              }
            ],
            image: null
          },
          {
            name: "TORITOS",
            comment: "SABORES",
            presentations: [
              {
                name: "Coco / Cacahuate / Piña Colada / Guanabana",
                prices: [
                  {
                    name: "Vaso",
                    price: 95
                  },
                  {
                    name: "Litro",
                    price: 270
                  }
                ]
              }
            ],
            image: null
          },
          {
            name: "MEZCAL",
            comment: "",
            presentations: [
              {
                name: "Ojo de Tigre",
                price: 150,
                ingredients: "(Joven)"
              },
              {
                name: "Ojo de Tigre",
                price: 195,
                ingredients: "(Reposado)"
              },
              {
                name: "400 Conejos",
                price: 140,
                ingredients: "(Joven)"
              },
              {
                name: "400 Conejos tobalá",
                price: 140
              },
              {
                name: "Unión",
                price: 160,
                ingredients: "(Joven)"
              },
              {
                name: "Necio",
                price: 160,
                ingredients: "(Espadín)"
              }
            ],
            image: null
          },
          {
            name: "DIGESTIVOS",
            comment: "",
            presentations: [
              {
                name: "Carajillo",
                price: 150
              },
              {
                name: "Sambuca",
                price: 140
              },
              {
                name: "Anís C/Anís",
                price: 145
              },
              {
                name: "Anís Dulce",
                price: 95
              },
              {
                name: "Anís Seco",
                price: 95
              },
              {
                name: "Licor 43",
                price: 145
              },
              {
                name: "Baileys",
                price: 145,
                ingredients: "(3 oz)"
              },
            ],
            image: null
          },
          {
            name: "TEQUILAS",
            comment: "",
            presentations: [
              {
                name: "1800",
                price: 135
              },
              {
                name: "Don Julio 70",
                price: 220
              },
              {
                name: "Don Julio Blanco",
                price: 165
              },
              {
                name: "Don Julio Añejo",
                price: 220
              },
              {
                name: "Don Julio Reposado",
                price: 165
              },
              {
                name: "Hornitos",
                price: 120
              },
              {
                name: "Jimador",
                price: 80
              },
              {
                name: "Cuervo Especial",
                price: 80
              },
              {
                name: "Cuervo Plata",
                price: 80
              },
              {
                name: "Herradura Blanco",
                price: 195
              },
              {
                name: "Herradero Añejo",
                price: 220
              },
              {
                name: "En Paloma",
                price: 45
              },
              {
                name: "En Vampiro",
                price: 45
              },
              {
                name: "En Bandera",
                price: 40
              },
            ],
            image: null
          },
          {
            name: "VODKA",
            comment: "",
            presentations: [
              {
                name: "Absolut",
                price: 120
              },
              {
                name: "Smirnoff",
                price: 120
              },
              {
                name: "Wyborowa",
                price: 120
              }
            ],
            image: null
          },
          {
            name: "WHISKY",
            comment: "",
            presentations: [
              {
                name: "Chivas Regal",
                price: 180
              },
              {
                name: "Etiqueta Roja",
                price: 125
              },
              {
                name: "Etiqueta Negra",
                price: 195
              },
              {
                name: "Buchanan's",
                price: 185
              },
              {
                name: "Old Parr",
                price: 185
              },
              {
                name: "Glenfiddich",
                price: 250
              },
            ],
            image: null
          },
          {
            name: "RON",
            comment: "",
            presentations: [
              {
                name: "Bacardí Blanco",
                price: 120
              },
              {
                name: "Bacardí Solera",
                price: 120
              },
              {
                name: "Bacardí Añejo",
                price: 120
              },
              {
                name: "Zacapa",
                price: 245
              },
              {
                name: "Matusalen",
                price: 130
              },
              {
                name: "Appleton State",
                price: 120
              },
            ],
            image: null
          },
          {
            name: "BRANDY",
            comment: "",
            presentations: [
              {
                name: "Terry",
                price: 130
              },
              {
                name: "Magno",
                price: 140
              },
              {
                name: "Fundador",
                price: 120
              },
              {
                name: "Torres 10",
                price: 130
              },
              {
                name: "Torres 20",
                price: 270
              },
            ],
            image: null
          }
        ]
      }
    ]

    getCategories() {
      return this.Menu
    }
    getEspecialidades(){
      for(const categoria of  this.Menu){
        if (categoria.name.toLowerCase() == "la especialidad"){
          console.log(`Muestro los productos:`, categoria)
          return categoria;
        }
      }
      return null;
    }
}
