import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from './ci-routing.module';
import { WorkqComponent } from './workq/workq.component';
import { ApplicationpannelComponent } from './creditprocessing/applicationpannel/applicationpannel.component';
import { SuggestedproductComponent } from './creditprocessing/suggestedproduct/suggestedproduct.component';
import {CreditmainComponent} from './creditprocessing/creditmain/creditmain.component';
import { CustomerprofilingComponent } from './customerprofiling/customerprofiling.component';
import { CistartComponent } from './cistart/cistart.component';
import {ApplicationpannelService} from './service/applicationpannel/applicationpannel.service';
import { DemographicRUComponent } from './customerprofiling/demographic/RU/demographic-ru/demographic-ru.component';
import { DemographicsPLComponent } from './customerprofiling/demographic/PL/demographics-pl/demographics-pl.component';
import { ButtonComponent } from './customerprofiling/footer/button/button.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    NotfoundComponent,
    WorkqComponent,
    ApplicationpannelComponent,
    SuggestedproductComponent,
    CreditmainComponent,
    CustomerprofilingComponent,
    CistartComponent,
    DemographicRUComponent,
    DemographicsPLComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApplicationpannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
