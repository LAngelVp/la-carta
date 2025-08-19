import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComidaInterface } from '../AsaderoLala/models/products-model';

@Component({
  selector: 'app-modal-detalles',
  imports: [
    CommonModule
  ],
  templateUrl: './modal-detalles.html',
  styleUrl: './modal-detalles.css'
})
export class ModalDetalles {
  @Input() producto: ComidaInterface | null = null;
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal(): void {
    this.cerrar.emit();
  }
}
