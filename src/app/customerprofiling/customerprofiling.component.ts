import {Component, Input, OnInit} from '@angular/core';
import {CIConstants} from '../Common/CiConstants';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customerprofiling',
  templateUrl: './customerprofiling.component.html',
  styleUrls: ['./customerprofiling.component.css']
})
export class CustomerprofilingComponent implements OnInit {
  country = CIConstants.B_CTRL_1;
  appId : string;
  ctrl_1: string;
  constructor(private  routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.appId = this.routerInfo.snapshot.params["appId"];
    this.ctrl_1 = this.routerInfo.snapshot.params['ctrl_1'];
    console.log("appid:"+this.appId+"ctrl_1"+this.ctrl_1);
  }

}
