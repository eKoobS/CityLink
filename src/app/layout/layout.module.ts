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
import {ComentariosComponent} from "../pages/perfil-ps/comentarios/comentarios.component";
import {GaleriaComponent} from "../pages/perfil-ps/galeria/galeria.component";
import {UbicacionComponent} from "../pages/perfil-ps/ubicacion/ubicacion.component";
import {PerfilPSComponent} from "../pages/perfil-ps/perfil-ps.component";


import {alertService} from "../services/alert.service";
import {perfil_psService} from "../services/perfil-ps.service";
import {acerca_DeService} from "../services/acerca-de.service";


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
        ComentariosComponent,
        GaleriaComponent,
        UbicacionComponent
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        ButtonsModule.forRoot(),
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    ],
    providers: [
        alertService,
        perfil_psService,
        acerca_DeService
    ]
})

export class LayoutModule {  }