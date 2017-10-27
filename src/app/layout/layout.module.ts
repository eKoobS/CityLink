import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { LayoutRouting } from "./layout.routing";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ButtonsModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationTriggerComponent } from './header/navigation-trigger/navigation-trigger.component';
import {AbbreviateTextPipe} from "../pipes/abbreviate-text.pipe";
import {AcercaDeComponent} from "../pages/perfil-ps/acerca-de/acerca-de.component";

import {GaleriaComponent} from "../pages/perfil-ps/galeria/galeria.component";
import {UbicacionComponent} from "../pages/perfil-ps/ubicacion/ubicacion.component";
import {PerfilPSComponent} from "../pages/perfil-ps/perfil-ps.component";


import {alertService} from "../services/alert.service";
import {userProviderService} from "../services/userProvider.service";


import {ComentarioComponent} from "../pages/perfil-ps/tab-comentario/comentario/comentario.component";
import {TabComentarioComponent} from "../pages/perfil-ps/tab-comentario/tab-comentario.component";


import {PrestadoresServiciosComponent} from "../pages/prestadores-servicios/prestadores-servicios.component";
import {FiltrosComponent} from "../pages/prestadores-servicios/filtros/filtros.component";
import {ListaPrestadoresServiciosComponent} from "../pages/prestadores-servicios/lista-prestadores-servicios/lista-prestadores-servicios.component";
import {EnviarComentarioComponent} from "../pages/perfil-ps/tab-comentario/enviar-comentario/enviar-comentario.component";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabase} from "angularfire2/database";
import {FormatDatePipe} from "../pipes/formatDate.pipe";


const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}

@NgModule ({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SearchComponent,
        NavigationComponent,
        NavigationTriggerComponent,
        AbbreviateTextPipe,
        AcercaDeComponent,
        PerfilPSComponent,
        GaleriaComponent,
        TabComentarioComponent,
        ComentarioComponent,
        UbicacionComponent,
        UbicacionComponent,
        PrestadoresServiciosComponent,
        FiltrosComponent,
        ListaPrestadoresServiciosComponent,
        EnviarComentarioComponent,
        FormatDatePipe

    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule,
        AngularFireModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        ButtonsModule.forRoot(),
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    ],
    providers: [
        alertService,
        AngularFireDatabase,
        userProviderService
    ]
})

export class LayoutModule {  }