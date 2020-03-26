import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { SlideComponent } from './slide/slide.component';
import { TableComponent } from './table/table.component';
import { ChiTietComponent } from './chi-tiet/chi-tiet.component';
import { SService } from './services/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, CategoryComponent, SlideComponent, TableComponent, ChiTietComponent, AddProductComponent, HomeComponent, AboutComponent, ServiceComponent, ContactComponent, NotFoundComponent, EditComponent,   ],
  bootstrap:    [ AppComponent ],
  providers: [SService],
})
export class AppModule { }
