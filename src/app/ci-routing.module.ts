import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {ProductComponent} from './product/product.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {WorkqComponent} from './workq/workq.component';

const routes: Routes = [
  { path: '', redirectTo: 'workq', pathMatch: 'full' },
  { path: 'workq', component: WorkqComponent},
  { path: 'product', component: ProductComponent},
  { path: 'productdetail', component: ProductdetailComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
