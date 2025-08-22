import { CanDeactivateFn } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { DeteccionUrl } from '../serviciosGlobales/deteccion-url';
import { isPlatformBrowser } from '@angular/common';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const stayOnUrlGuard: CanDeactivateFn<CanComponentDeactivate> = () => {
  // Verificar si estamos en el navegador
  if (typeof window === 'undefined' || !isPlatformBrowser(inject(PLATFORM_ID))) {
    return true; // Permitir navegación en SSR
  }
  
  const deteccionUrl = inject(DeteccionUrl);
  
  if (deteccionUrl.isStayOnUrlEnabled()) {
    console.log('Navegación bloqueada por guardián');
    return false;
  }
  
  return true;
};