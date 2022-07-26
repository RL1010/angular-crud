import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import {AddEditComponent} from "./add-edit/add-edit.component";
import {LayoutComponent} from "./layout/layout.component";
import {ListComponent} from "./list/list.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddEditComponent, LayoutComponent, ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }

