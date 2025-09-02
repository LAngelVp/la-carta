import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { MenuCategories } from '../../components/menu-categories/menu-categories';
import { CommonModule } from '@angular/common';

interface CarouselItem {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  imports: [
    Carousel,
    MenuCategories,
    CommonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  title = 'my-carousel-app';

  carouselSlides: CarouselItem[] = [
    { imageSrc: 'https://www.tomizone.com/wp-content/uploads/2017/10/1080x720.png', imageAlt: 'Angular Slide 1' },
    { imageSrc: 'https://www.tomizone.com/wp-content/uploads/2017/10/1080x720.png', imageAlt: 'Angular Slide 2' },
    { imageSrc: 'https://www.tomizone.com/wp-content/uploads/2017/10/1080x720.png', imageAlt: 'Angular Slide 3' },
    { imageSrc: 'https://www.tomizone.com/wp-content/uploads/2017/10/1080x720.png', imageAlt: 'Angular Slide 4' },
  ];

  currentSelectedCategory: string = '';

  onCategorySelected(categoryName: string): void {
    this.currentSelectedCategory = categoryName;
    console.log(`AppComponent recibió la categoría: ${categoryName}`);
    // Aquí podrías añadir lógica para filtrar ítems del menú basándote en la categoría seleccionada
  }

}
