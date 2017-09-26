import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { SharedService } from "./shared/services/shared.service";
import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        HttpModule,
        routing
    ],
    providers: [
        SharedService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
