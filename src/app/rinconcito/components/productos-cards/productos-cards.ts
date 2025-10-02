import { Component, Input, Signal } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-productos-cards',
  imports: [],
  templateUrl: './productos-cards.html',
  styleUrl: './productos-cards.css'
})
export class ProductosCards {
  @Input() productosSeleccionados: Category | null = null;
}
