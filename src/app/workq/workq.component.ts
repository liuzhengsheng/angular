import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CIConstants} from '../Common/CiConstants';

@Component({
  selector: 'app-workq',
  templateUrl: './workq.component.html',
  styleUrls: ['./workq.component.css']
})
export class WorkqComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }
  openApp() {
    console.log(event);
    CIConstants.APP_ID = event.srcElement.innerHTML.substr(0,9);
    switch (event.srcElement.innerHTML.substr(12,14)){
      case "PL": CIConstants.B_CTRL_1 = 70;break;
      case "RU": CIConstants.B_CTRL_1 = 44;break;
      default : CIConstants.B_CTRL_1 =0;break;
    }
    CIConstants.SCREEN_MODE = 'default';
    this.router.navigate(['customerprofiling',{appId:CIConstants.APP_ID,ctrl_1:CIConstants.B_CTRL_1}]);
  }
}
