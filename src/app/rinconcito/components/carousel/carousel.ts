import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {

  @Input() slides: CarouselItem[] = []; // Recibe un array de objetos con imagen y texto alternativo

  currentIndex: number = 0;
  totalItems: number = 0;

  ngOnInit(): void {
    this.totalItems = this.slides.length;
    // Opcional: Iniciar el carrusel automáticamente después de un tiempo
    // setInterval(() => this.next(), 5000);
  }

  // Navega a la siguiente diapositiva
  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
  }

  // Navega a la diapositiva anterior
  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
  }

  // Navega a una diapositiva específica por índice
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
