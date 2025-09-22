import { Routes } from '@angular/router';
import { MenuAsaderoLala } from './AsaderoLala/pages/menu-asadero-lala/menu-asadero-lala';
import { stayOnUrlGuard } from './guards/stay-on-url-guard';
import { NotFound } from './componentesGlobales/not-found/not-found';
import { HomeRinconcito } from './rinconcito/pages/home-rinconcito/home-rinconcito';

export const routes: Routes = [
    {
        path: "asadero-doña-lala",
        component: MenuAsaderoLala,
        canDeactivate: [stayOnUrlGuard]
    },
    {
        path: "elRinconcito",
        component: HomeRinconcito,
        canDeactivate: [stayOnUrlGuard]
    },
    {
      path: "",
      component: NotFound
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
