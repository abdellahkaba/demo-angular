import { Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {NewProductComponent} from "./new-product/new-product.component";

export const routes: Routes = [
  {path : "product" , component : ProductComponent},
  {path : "navbar", component : NavbarComponent},
  {path : "home" , component : HomeComponent},
  {path : "new-product" , component : NewProductComponent}
];
