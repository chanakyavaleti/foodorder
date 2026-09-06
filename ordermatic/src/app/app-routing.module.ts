import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostabComponent } from './postab/postab.component';
import { PriceComponent } from './price/price.component';
import { AllfeaturesComponent } from './allfeatures/allfeatures.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'postab',
    component:PostabComponent
  },
  {
    path:'price',
    component:PriceComponent
  },
  {
    path:'allfeatures',
    component:AllfeaturesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
