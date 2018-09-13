import '../polyfills.ts';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatDialogModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickModule } from 'ngx-slick';
import { NguCarouselModule } from '@ngu/carousel';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import { AdComponent } from './components/ad/ad.component';
import { SideAdComponent } from './components/side-ad/side-ad.component';
import { AdDialogComponent } from './dialog/ad-dialog/ad-dialog.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CompanyDialogComponent } from './dialog/company-dialog/company-dialog.component';
import { ContactDialogComponent } from './dialog/contact-dialog/contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    FilterComponent,
    HomeComponent,
    ContactComponent,
    QuemSomosComponent,
    AdComponent,
    SideAdComponent,
    AdDialogComponent,
    CompanyDialogComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatRippleModule,
    NguCarouselModule
  ],
  entryComponents: [
    AdDialogComponent, 
    ContactDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

