import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', loadChildren: productsModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
