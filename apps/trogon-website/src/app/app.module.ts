import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageHeroComponent } from './components/homepage-hero/homepage-hero.component';
import { VitronEnergySupplierComponent } from './components/vitron-energy-supplier/vitron-energy-supplier.component';
import { AppRoutingModule } from './app.routing.module';
import { AboutpageHeroComponent } from './components/aboutpage-hero/aboutpage-hero.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AboutBodyComponent } from './components/about-body/about-body.component';
import { GetQuoteFormComponent } from './components/get-quote-form/get-quote-form.component';
import { GetQuotePageComponent } from './pages/get-quote-page/get-quote-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import {
  ApiService,
  httpInterceptor,
  TokenService,
  UiLoader,
} from '@trogon-energy/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesElectricalMaintenancePageComponent } from './pages/services-electrical-maintenance-page/services-electrical-maintenance-page.component';
import { ServicesSolarInstallationsPageComponent } from './pages/services-solar-installations-page/services-solar-installations-page.component';
import { ServicesBoreholePumpInstallationsPageComponent } from './pages/services-borehole-pump-installations-page/services-borehole-pump-installations-page.component';
import { ServicesElectricalHardwarePageComponent } from './pages/services-electrical-hardware-page/services-electrical-hardware-page.component';
import { ServicesLightingSolutionsPageComponent } from './pages/services-lighting-solutions-page/services-lighting-solutions-page.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesCctvPageComponent } from './pages/services-cctv-page/services-cctv-page.component';
import { ServicesAlarmSystemsPageComponent } from './pages/services-alarm-systems-page/services-alarm-systems-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    HomepageHeroComponent,
    VitronEnergySupplierComponent,
    AboutpageHeroComponent,
    AboutPageComponent,
    AboutBodyComponent,
    GetQuoteFormComponent,
    GetQuotePageComponent,
    ContactComponent,
    ServicesElectricalMaintenancePageComponent,
    ServicesSolarInstallationsPageComponent,
    ServicesBoreholePumpInstallationsPageComponent,
    ServicesElectricalHardwarePageComponent,
    ServicesLightingSolutionsPageComponent,
    ServicesComponent,
    ServicesCctvPageComponent,
    ServicesAlarmSystemsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    NgxUiLoaderModule.forRoot(UiLoader.load()),
    NgxUiLoaderHttpModule,
    HttpClientModule,
    ToastModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    ApiService,
    TokenService,
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
