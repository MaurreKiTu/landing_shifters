import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routes/main.route'),
    pathMatch: 'full',
  },
];
