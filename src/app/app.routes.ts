import { Routes } from '@angular/router';
import {CompanyListComponent} from "../pages/company-list/company-list.component";
import {CompanyDetailComponent} from "../pages/company-detail/company-detail.component";
import {CompanyYandexMapComponent} from "../pages/company-yandex-map/company-yandex-map.component";

export const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'detail/:id', component: CompanyDetailComponent },
  { path: 'map', component: CompanyYandexMapComponent },
];
