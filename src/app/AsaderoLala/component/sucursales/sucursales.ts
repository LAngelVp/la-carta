import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  imports: [
    CommonModule
  ],
  templateUrl: './sucursales.html',
  styleUrl: './sucursales.css'
})
export class Sucursales {
  titulo: string = "Sucursales";
  imagen_localizacion : string = "/AsaderoLala/icons/maps.png"

  sucursales = [
    {
      id: 1,
      localidad: "Yanga",
      estado: "Veracruz",
      direccion_completa: 'Avenida 1 #901 en intersección con calle 9 a un costado de refaccionaria Aquiles, CP: 94930.',
      numero_telefono: 2711808108
    }
  ]
}
