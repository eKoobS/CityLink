import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {AcercaDeComponent} from "../pages/perfil-ps/acerca-de/acerca-de.component";
import {GaleriaComponent} from "../pages/perfil-ps/galeria/galeria.component";
import {UbicacionComponent} from "../pages/perfil-ps/ubicacion/ubicacion.component";
import {PerfilPSComponent} from "../pages/perfil-ps/perfil-ps.component";
import {TabComentarioComponent} from "../pages/perfil-ps/tab-comentario/tab-comentario.component";
import {PrestadoresServiciosComponent} from "../pages/prestadores-servicios/prestadores-servicios.component";


const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
        //Home

        {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
        {path: 'usuarios', loadChildren: '../pages/usuarios/usuarios.module#UsuariosModule'},
        {path: 'categorias', loadChildren: '../pages/categorias/categorias.module#CategoriasModule'},
        {
            path: 'perfil-ps/:id',
            component: PerfilPSComponent,
            children: [
                { path: 'acercaDe', component: AcercaDeComponent},
                // { path: 'comentarios', component:TabComentariosComponent },
                { path: 'comentarios', component: TabComentarioComponent},
                { path: 'galeria', component: GaleriaComponent},
                { path: 'ubicacion', component: UbicacionComponent},
                { path: '**', component: AcercaDeComponent}

            ]
        },
        {path: 'prestadores-servicios', component: PrestadoresServiciosComponent}
    ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
