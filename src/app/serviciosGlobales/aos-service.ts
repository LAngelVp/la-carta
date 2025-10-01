import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface AosConfig {
  duration?: number;
  easing?: string;
  once?: boolean;
  offset?: number;
  delay?: number;
  disable?: boolean | (() => boolean);
}
@Injectable({
  providedIn: 'root'
})
export class AosService {
  private aos: any;
  private initialized = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  // Inicialización básica
  async init(config?: AosConfig): Promise<boolean> {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    if (this.initialized) {
      console.warn('AOS ya está inicializado');
      return true;
    }

    try {
      const AOS = await import('aos');
      this.aos = AOS.default;
      
      const finalConfig: AosConfig = {
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        disable: this.prefersReducedMotion(),
        ...config
      };

      this.aos.init(finalConfig);
      this.initialized = true;
      
      return true;
    } catch (error) {
      console.error('Error al inicializar AOS:', error);
      return false;
    }
  }

  // Refrescar para contenido dinámico
  refresh(): void {
    if (this.isAvailable()) {
      this.aos.refresh();
    }
  }

  // Destruir instancia
  destroy(): void {
    if (this.isAvailable()) {
      this.aos.destroy();
      this.initialized = false;
    }
  }

  // Verificar si está disponible
  isAvailable(): boolean {
    return isPlatformBrowser(this.platformId) && 
           this.initialized && 
           this.aos;
  }

  // Reinicializar con nueva configuración
  async reinit(config?: AosConfig): Promise<boolean> {
    this.destroy();
    return this.init(config);
  }

  private prefersReducedMotion(): boolean {
    return isPlatformBrowser(this.platformId) && 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
