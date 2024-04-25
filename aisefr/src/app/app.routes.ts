import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/main/mainpage/mainpage.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AboutComponent } from './pages/about/about.component';
import { BedComponent } from "./pages/catalog/bed/bed.component";
import {ClothComponent} from "./pages/catalog/cloth/cloth.component";
import {BedSetsComponent} from "./pages/catalog/bed-sets/bed-sets.component";
import {BedSheetsComponent} from "./pages/catalog/bed-sheets/bed-sheets.component";
import {PajamasComponent} from "./pages/catalog/pajamas/pajamas.component";
import {RobesComponent} from "./pages/catalog/robes/robes.component";
import {SizeChartComponent} from "./pages/main/size-chart/size-chart.component";
import {DetailComponent} from "./pages/catalog/detail/detail.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {LoginComponent} from "./authentification/login/login.component";
import {RegisterComponent} from "./authentification/register/register.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainpageComponent},
  { path: 'home/size-chart', component: SizeChartComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'catalog/bed', component: BedComponent},
  { path: 'catalog/bed-sets', component: BedSetsComponent},
  { path: 'catalog/bed-sheets', component: BedSheetsComponent},
  { path: 'catalog/cloth', component: ClothComponent},
  { path: 'catalog/pajamas', component: PajamasComponent},
  { path: 'catalog/product/:id', component: DetailComponent},
  { path: 'catalog/robes', component: RobesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent }
];
