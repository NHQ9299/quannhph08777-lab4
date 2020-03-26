import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'about', component: AboutComponent},
  {path :'services' , component :ServiceComponent},
  {path : 'contact', component : ContactComponent},
  { path: "product/add", component: AddProductComponent },
  { path: "product/:productID", component: ChiTietComponent },
  {path : "product/edit/:id", component:EditComponent},
  { path: "404", component: NotFoundComponent},
  { path: "**", redirectTo: "404", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
