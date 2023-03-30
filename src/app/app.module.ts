import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* HEADER */
import { HeaderComponent } from './components/header/header.component';

/* FOOTER */
import { FooterComponent } from './components/footer/footer.component';

/* LAYOUT */
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        AppLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
