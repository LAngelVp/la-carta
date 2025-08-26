import { Component } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        },
        {
          name: "ARROZ CON CAMARONES",
          comment: "",
          price: 120
        }
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
          ]
        },
        {
          name: "CAMARONES",
          comment: "Acompañados de Ensalada y Arroz",
          presentations: [
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
            },
            {
              name: "Orden en Pulpa",
              price: 215
            },
            {
              name: "Orden de Cáscara",
              price: 190
            }
          ]
        },
        {
          name: "PESCADOS",
          comment: "Acompañalos de la sazón de tu preferencia",
          sizes: [
            {
              name: "Mojarra",
              price: 195,
              grammage: "Chica (500 - 550 gramos)"
            },
            {
              name: "Mojarra",
              price: 230,
              grammage: "Mediana (570 - 650 gramos)"
            },
            {
              name: "Mojarra",
              price: 290,
              grammage: "Grande (680 - 750 gramos)"
            },
            {
              name: "Mojarra",
              price: 320,
              grammage: "Jumbo (780 - 900 gramos)"
            },
            {
              name: "Rebanadas de Robalo",
              price: 180,
              grammage: "Chica (200 - 250 gramos)"
            },
            {
              name: "Rebanadas de Robalo",
              price: 235,
              grammage: "Mediana (270 - 320 gramos)"
            },
            {
              name: "Rebanadas de Robalo",
              price: 290,
              grammage: "Grande (340 - 400 gramos)"
            },
            {
              name: "Chucumites",
              price: 320,
              grammage: "Chico (460 - 550 gramos)"
            },
            {
              name: "Chucumites",
              price: 370,
              grammage: "Mediano (580 - 670 gramos)"
            },
            {
              name: "Chucumites",
              price: 445,
              grammage: "Grande (700 - 800 gramos)"
            },
            {
              name: "Chucumites",
              price: 495,
              grammage: "Jumbo (830 - 950 gramos)"
            }
          ],
          presentations: [
            {
              name: "Al Mojo de Ajo",
              ingredients: "(Ajos fritos o Pasta de Ajo)"
            },
            {
              name: "A la Diabla",
              ingredients: "(Pasta de Ajo y Salsa Macha)"
            },
            {
              name: "Al Chile limón"
            },
            {
              name: "Chipotle"
            },
            {
              name: "A la Chilpaya"
            },
            {
              name: "A la Veracruzana"
            },
            {
              name: "Empapelado",
              ingredients: "(En Salsa Verde o a la Mexicana)"
            }
          ]
        }
      ]
    },
    {
      name: "Lo Imperdible",
      products: [
        {
          name: "Torta de Mariscos",
          price: 175
        },
        {
          name: "Torta de Camarón",
          price: 175
        },
        {
          name: "Chile Relleno de Mariscos",
          price: 175
        },
        {
          name: "Chile Relleno de Camarón",
          price: 175
        },
        {
          name: "FILETES",
          comment: "Acompañados con Ensalada y Arroz",
          presentations: [
            {
              name: "Empanizado",
              price: 230,
              ingredients: "(Ensalada, Arroz y Papas)"
            },
            {
              name: "A la Plancha",
              price: 210,
              ingredients: "(Verduras, Arroz, Ensalada)"
            },
            {
              name: "A la Diabla",
              price: 210
            },
            {
              name: "Enchipotlado",
              price: 210
            },
            {
              name: "A la Veracruzana",
              price: 210
            },
            {
              name: "Al Mojo de Ajo",
              price: 210
            },
            {
              name: "A la Chilpaya",
              price: 210
            },
            {
              name: "Relleno de Mariscos",
              price: 245,
              ingredients: "(Camarón, Pulpo y Jaiba)"
            }
            ,
            {
              name: "Relleno de Camarón",
              price: 245,
              ingredients: "(Arroz y Pico de Gallo)"
            }
          ]
        },
        {
          name: "ORDEN JAIBA EN PULPA",
          comment: "",
          presentations: [
            {
              name: "Chilpaya",
              price: 225
            },
            {
              name: "Al Mojo de Ajo con Habanero",
              price: 225
            }
          ]
        },
        {
          name: "REVOLTIJO DE MARISCOS",
          comment: "Camarón Pulpa, Caracol y Pulpo",
          price: 280
        },
        {
          name: "ORDEN DE PULPOS",
          comment: "",
          presentations: [
            {
              name: "Al Mojo de Ajo",
              price: 285
            },
            {
              name: "Enchipotlados",
              price: 285
            },
            {
              name: "A la Mantequilla",
              price: 285
            },
            {
              name: "A la Chilpaya",
              price: 285
            },
            {
              name: "A la Diabla",
              price: 285
            },
            {
              name: "Encebollados",
              price: 285
            },

          ]
        },
        {
          name: "CARNES",
          comment: "",
          presentations: [
            {
              name: "Bistec Asado",
              price: 165,
              ingredients: "(Ensalada, Arroz y Frijoles)"
            },
            {
              name: "Arrachera",
              price: 290,
              ingredients: "(Pico de Gallo, Arroz, Frijoles y Papas)"
            },{
              name: "Tampiqueña",
              price: 230,
              ingredients: "(Ensalada, Arroz, Plátano Fritos, Frijoles, Papas, 2 Enchiladas)"
            }
            ,{
              name: "Tampiqueña con Arrachera",
              price: 310
            },
            {
              name: "Milanesa Pollo",
              price: 195,
              ingredients: "(Papas, Arroz, Ensalada)"
            }
          ]
        },
        {
          name: "GUARNICIONES",
          comment: "No se hacen cambios en las guarniciones",
          presentations: [
            {
              name: "Orden de Papas a la Francesa",
              price: 75
            },
            {
              name: "Porción de Papas a la Francesa",
              price: 40
            },
            {
              name: "Orden de Frijoles",
              price: 45
            },
            {
              name: "Orden de Pico de Gallo",
              price: 30
            },
            {
              name: "Orden de Guacamoles",
              price: 75
            },
            {
              name: "Orden de Totopos",
              price: 20
            }
          ]
        },
        {
          name: "PARA NIÑOS",
          comment: "",
          presentations: [
            {
              name: "Nuggets de Pollo",
              price: 150,
              ingredients: "(Papas)"
            },
            {
              name: "Hamburguesa",
              price: 175,
              ingredients: "(Papas)"
            }
          ]
        },
        {
          name: "ARROZ",
          comment: "",
          presentations: [
            {
              name: "Natural",
              price: 30
            },
             {
              name: "Con Plátanos Fritos",
              price: 60
            }
          ]
        }
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ]
    }
  ]
}

