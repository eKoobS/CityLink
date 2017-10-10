import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [

    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
    { path: 'recuperar-contrasenia', loadChildren: './pages/recuperar-contrasenia/recuperar-contrasenia.module#RecuperarContraseniaModule'},
    { path: 'verificar-email' , loadChildren: './pages/verificar-email/verificar-email.module#VerificarEmailModule' }

];

export const routing = RouterModule.forRoot(ROUTES);
