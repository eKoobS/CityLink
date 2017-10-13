import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
        //Home
        { path: '', redirectTo: 'categorias', pathMatch: 'full' },
        { path: 'categorias', loadChildren: '../pages/categorias/categorias.module#CategoriasModule' }
    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
