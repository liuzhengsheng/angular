import {Component, Input, OnInit} from '@angular/core';
import {ApplicationPannel, ApplicationpannelService} from '../../service/applicationpannel/applicationpannel.service';

@Component({
  selector: 'app-applicationpannel',
  templateUrl: './applicationpannel.component.html',
  styleUrls: ['./applicationpannel.component.css']
})
export class ApplicationpannelComponent implements OnInit {
  @Input() appid:string;
  @Input() ctrl_1:string;
    ApplicationPannel: ApplicationPannel;
    constructor(private applicationpannelService: ApplicationpannelService) { }

    ngOnInit() {
      console.log("hahhaha"+this.appid+"hahah"+this.ctrl_1);
      this.ApplicationPannel = this.applicationpannelService.getApplicationPannel(this.appid,this.ctrl_1);
    }

}
