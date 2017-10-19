import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [

    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
    { path: 'contrasenia-olvidada', loadChildren: './pages/contrasenia-olvidada/contrasenia-olvidada.module#ContraseniaOlvidadaModule'},
    { path: 'auth' , loadChildren: './pages/auth/auth.module#AuthModule' }

];

export const routing = RouterModule.forRoot(ROUTES)

