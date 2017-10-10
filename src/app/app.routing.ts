import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [

    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'contrasenia-olvidada', loadChildren: './pages/contrasenia-olvidada/contrasenia-olvidada.module#ContraseniaOlvidadaModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
