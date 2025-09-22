import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { DeteccionUrl } from '../serviciosGlobales/deteccion-url';
import { isPlatformBrowser } from '@angular/common';

export const stayOnUrlGuard: CanActivateFn = (route, state) => {
  // Verificar si estamos en el navegador
  if (typeof window === 'undefined' || !isPlatformBrowser(inject(PLATFORM_ID))) {
    return true; // Permitir navegación en SSR
  }
  
  const deteccionUrl = inject(DeteccionUrl);
  const router = inject(Router);

  // Si es la primera vez, permitir acceso y guardar la ruta
  if (!deteccionUrl.getInitialRoute()) {
    deteccionUrl.setInitialRoute(route.routeConfig?.path || '');
    return true;
  }

  // Si intenta acceder a una ruta diferente, redirigir a la inicial
  const initialRoute = deteccionUrl.getInitialRoute();
  const currentPath = route.routeConfig?.path || '';
  
  if (currentPath !== initialRoute) {
    console.log('Redirigiendo a ruta inicial:', initialRoute);
    router.navigate([initialRoute]);
    return false;
  }
  
  return true;
};