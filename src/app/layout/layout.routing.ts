import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const LAYOUT_ROUTES: Routes = [
  { path: '', component: LayoutComponent, children: [
        //Home
        { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
        { path: 'usuarios', loadChildren: '../pages/usuarios/usuarios.module#UsuariosModule' }

    ]}
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
