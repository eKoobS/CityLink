import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [

    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
