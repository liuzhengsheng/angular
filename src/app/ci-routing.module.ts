import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {WorkqComponent} from './workq/workq.component';
import {CreditmainComponent} from './creditprocessing/creditmain/creditmain.component';
import {CustomerprofilingComponent} from './customerprofiling/customerprofiling.component';
import {CistartComponent} from './cistart/cistart.component';

const routes: Routes = [
  { path: '', redirectTo: 'cistart', pathMatch: 'full' },
  { path: 'cistart', component: CistartComponent},
  { path: 'workq', component: WorkqComponent},
  { path: 'productdetail', component: ProductdetailComponent},
  { path: 'creditprocessing', component: CreditmainComponent},
  { path: 'customerprofiling', component: CustomerprofilingComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
