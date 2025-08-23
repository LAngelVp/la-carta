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
          comment: "Acompañados de Ensalada y Arroz"
        },
        {
          name: "PESCADOS",
          comment: "Acompañalos de la sazón de tu preferencia"
        }
      ]
    },
    {
      name: "Lo Imperdible",
      products: [
        {
          name: "FILETES",
          comment: "Acompañados con Ensalada y Arroz"
        },
        {
          name: "ORDEN JAIBA EN PULPA",
          comment: ""
        },
        {
          name: "REVOLTIJO DE MARISCOS",
          comment: "Camarón Pulpa, Caracol y Pulpo"
        },
        {
          name: "ORDEN DE PULPOS",
          comment: ""
        },
        {
          name: "CARNES",
          comment: ""
        },
        {
          name: "GUARNICIONES",
          comment: ""
        },
        {
          name: "PARA NIÑOS",
          comment: ""
        },
        {
          name: "ARROZ",
          comment: ""
        }
      ]
    },
    {
      name: "Bebidas",
      products: [
        {
          name: "AGUAS",
          comment: ""
        },
        {
          name: "PREPARADOS MINERALES",
          comment: ""
        },
        {
          name: "REFRESCOS",
          comment: ""
        },
        {
          name: "CAFÉ / TÉ",
          comment: ""
        },
        {
          name: "CERVEZAS",
          comment: ""
        },
        {
          name: "TARROS PREPARADOS",
          comment: ""
        },
        {
          name: "TORITOS",
          comment: ""
        },
        {
          name: "MEZCAL",
          comment: ""
        },
        {
          name: "DIGESTIVOS",
          comment: ""
        },
        {
          name: "TEQUILAS",
          comment: ""
        },
        {
          name: "VODKA",
          comment: ""
        },
        {
          name: "WHISKY",
          comment: ""
        },
        {
          name: "RON",
          comment: ""
        },
        {
          name: "BRANDY",
          comment: ""
        }
      ]
    }
  ]
}

