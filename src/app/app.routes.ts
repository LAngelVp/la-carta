import { Routes } from '@angular/router';
import { MenuAsaderoLala } from './AsaderoLala/pages/menu-asadero-lala/menu-asadero-lala';
import { stayOnUrlGuard } from './guards/stay-on-url-guard';
import { NotFound } from './componentesGlobales/not-found/not-found';
import { Home } from './rinconcito/pages/home/home';

export const routes: Routes = [
    {
        path: "asadero-doña-lala",
        component: MenuAsaderoLala,
        canDeactivate: [stayOnUrlGuard]
    },
    {
      path: "",
      component: Home
    },
    {
        path: "**", // Cualquier otra ruta
        component: NotFound, // Redirigir siempre a la misma
        pathMatch: 'full'
    },
    {
        path: "**",
        component: NotFound
    }
];
