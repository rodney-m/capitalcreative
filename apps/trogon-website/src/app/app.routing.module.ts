import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { GetQuotePageComponent } from './pages/get-quote-page/get-quote-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServicesElectricalMaintenancePageComponent } from './pages/services-electrical-maintenance-page/services-electrical-maintenance-page.component';
import { ServicesSolarInstallationsPageComponent } from './pages/services-solar-installations-page/services-solar-installations-page.component';
import { ServicesBoreholePumpInstallationsPageComponent } from './pages/services-borehole-pump-installations-page/services-borehole-pump-installations-page.component';
import { ServicesElectricalHardwarePageComponent } from './pages/services-electrical-hardware-page/services-electrical-hardware-page.component';
import { ServicesLightingSolutionsPageComponent } from './pages/services-lighting-solutions-page/services-lighting-solutions-page.component';
import { ServicesCctvPageComponent } from './pages/services-cctv-page/services-cctv-page.component';
import { ServicesAlarmSystemsPageComponent } from './pages/services-alarm-systems-page/services-alarm-systems-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'news',
    loadChildren: () => import('@trogon-energy/news').then((a)=> a.NewsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('@trogon-energy/projects').then((a)=> a.ProjectsModule)
  },
  {
    path: 'get-a-quote',
    component: GetQuotePageComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {
        path : 'electrical-maintenance',
        component: ServicesElectricalMaintenancePageComponent
      },
      {
        path : 'solar-installations',
        component: ServicesSolarInstallationsPageComponent
      },
      {
        path : 'cctv',
        component: ServicesCctvPageComponent
      },
      {
        path : 'alarm-systems',
        component: ServicesAlarmSystemsPageComponent
      },
      {
        path : 'electrical-hardware',
        component: ServicesElectricalHardwarePageComponent
      },
      {
        path : 'lighting-solutions',
        component: ServicesLightingSolutionsPageComponent
      },
      { path : '' , redirectTo: 'electrical-maintenance', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
