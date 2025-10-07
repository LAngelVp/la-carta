import { Component, HostListener, Inject, Input, PLATFORM_ID, Signal } from '@angular/core';
import { Category } from '../../../InterfaceGlobales/category.model';
import { AnimacionesGlobales } from '../../../serviciosGlobales/animaciones-globales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-especialidades',
  imports: [
    CommonModule
  ],
  templateUrl: './lista-especialidades.html',
  styleUrl: './lista-especialidades.css'
})
export class ListaEspecialidades {
  imgCabecera : string = "/elRinconcito/logosIconos/oceano.jpg"
@Input() especialidades!: Signal<Category[]>;
  currentSlide = 0;
  
  // Variables para el modal de imagen
  showImagePreview = false;
  currentImage: string = '';
  currentImageTitle: string = '';
  allImages: { src: string; title: string }[] = [];
  currentImageIndex = 0;
  imageLoaded = false;
  imagen_platillo: string = "/elRinconcito/logosIconos/logoFondoBlanco.jpg";

  
  constructor(
    private animacionesNativas: AnimacionesGlobales,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngAfterViewInit(): void {
    this.animacionesNativas.initScrollAnimations({
      threshold: 0.1,
      rootMargin: '0px',
      once: true
    });

    // Animación inicial para elementos visibles
    setTimeout(() => {
      this.animacionesNativas.refresh();
    }, 100);
  }

  @HostListener('document:keydown.escape')
  onEscapePressed() {
    this.closeImagePreview();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeftPressed() {
    if (this.showImagePreview && this.hasMultipleImages()) {
      this.previousImage();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRightPressed() {
    if (this.showImagePreview && this.hasMultipleImages()) {
      this.nextImage();
    }
  }

  nextSlide() {
    if (this.especialidades().length <= 1) return;
    this.currentSlide = (this.currentSlide + 1) % this.especialidades().length;
  }

  previousSlide() {
    if (this.especialidades().length <= 1) return;
    this.currentSlide = this.currentSlide === 0 
      ? this.especialidades().length - 1 
      : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    if (this.especialidades().length <= 1) return;
    this.currentSlide = index;
  }

  getTotalProducts(categoria: Category): number {
    // Validar que products exista y sea un array
    if (!categoria.products || !Array.isArray(categoria.products)) {
      return 0;
    }

    let total = 0;
    for (const producto of categoria.products) {
      if (producto.presentations && producto.presentations.length > 0) {
        total += producto.presentations.length;
      } else {
        total += 1;
      }
    }
    return total;
  }

  // Método para abrir la previsualización de imagen
  openImagePreview(imageSrc: string, title: string) {
    this.collectAllImages();
    
    // Encontrar el índice de la imagen actual
    this.currentImageIndex = this.allImages.findIndex(img => img.src === imageSrc);
    if (this.currentImageIndex === -1) {
      this.currentImageIndex = 0;
    }
    
    this.currentImage = imageSrc;
    this.currentImageTitle = title;
    this.imageLoaded = false;
    this.showImagePreview = true;
  }

  // Cerrar el modal
  closeImagePreview() {
    this.showImagePreview = false;
    this.currentImage = '';
    this.currentImageTitle = '';
    this.allImages = [];
    this.currentImageIndex = 0;
  }

  // Navegar a la imagen anterior
  previousImage() {
    if (this.allImages.length > 0) {
      this.currentImageIndex = this.currentImageIndex > 0 
        ? this.currentImageIndex - 1 
        : this.allImages.length - 1;
      
      this.currentImage = this.allImages[this.currentImageIndex].src;
      this.currentImageTitle = this.allImages[this.currentImageIndex].title;
      this.imageLoaded = false;
    }
  }

  // Navegar a la siguiente imagen
  nextImage() {
    if (this.allImages.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.allImages.length;
      this.currentImage = this.allImages[this.currentImageIndex].src;
      this.currentImageTitle = this.allImages[this.currentImageIndex].title;
      this.imageLoaded = false;
    }
  }

  // Verificar si hay múltiples imágenes
  hasMultipleImages(): boolean {
    return this.allImages.length > 1;
  }

  // Manejar error de carga de imagen
  handleImageError() {
    // Cerrar el modal si la imagen no carga
    this.closeImagePreview();
  }

  // Recopilar todas las imágenes de los productos que SI tienen imagen
  private collectAllImages() {
    this.allImages = [];
    
    // Validar que especialidades() exista y sea un array
    const especialidadesData = this.especialidades();
    if (!especialidadesData || !Array.isArray(especialidadesData)) {
      return;
    }

    especialidadesData.forEach(categoria => {
      // Validar que la categoría y sus productos existan
      if (!categoria?.products || !Array.isArray(categoria.products)) {
        return; // Saltar esta categoría si no tiene productos
      }

      categoria.products.forEach(producto => {
        // Validar que el producto exista
        if (!producto) return;

        // Solo agregar productos que tengan imagen
        if (producto.image) {
          this.allImages.push({
            src: producto.image,
            title: producto.name || "" // Usar nombre del producto o string vacío
          });
        }
        
        // Agregar presentaciones que tengan imagen
        if (producto.presentations && Array.isArray(producto.presentations)) {
          producto.presentations.forEach(presentacion => {
            // Validar que la presentación exista y tenga imagen
            if (presentacion?.image) {
              this.allImages.push({
                src: presentacion.image,
                title: `${producto.name || 'Producto'} - ${presentacion.name || 'Presentación'}`
              });
            }
          });
        }
      });
    });
  }
}
