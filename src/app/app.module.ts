import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from './ci-routing.module';
import { WorkqComponent } from './workq/workq.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductdetailComponent,
    NotfoundComponent,
    WorkqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
