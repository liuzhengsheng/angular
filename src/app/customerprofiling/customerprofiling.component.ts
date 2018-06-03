import {CIConstants} from '../Common/CiConstants';
import {ActivatedRoute} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DemographicsPLComponent } from './demographic/PL/demographics-pl/demographics-pl.component';

@Component({
  selector: 'app-customerprofiling',
  templateUrl: './customerprofiling.component.html',
  styleUrls: ['./customerprofiling.component.css']
})
export class CustomerprofilingComponent implements OnInit {
  country = CIConstants.B_CTRL_1;
  appId : string;
  ctrl_1: string;
  screen_mode = CIConstants.SCREEN_MODE;
  QQ = "QQ"
  @ViewChild('child1')
  child1:DemographicsPLComponent

  constructor(private  routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.appId = this.routerInfo.snapshot.params["appId"];
    this.ctrl_1 = this.routerInfo.snapshot.params['ctrl_1'];
    console.log(CIConstants);
  }
}
