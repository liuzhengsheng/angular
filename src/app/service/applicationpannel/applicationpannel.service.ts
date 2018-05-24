import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ApplicationpannelService {
  constructor(private  http: HttpClient) { }
  getApplicationPannel(appid:string,ctrl_1:string): ApplicationPannel {
    if(appid =="201800001") {
      console.log("sssss"+appid);
      return new ApplicationPannel("201800001", "Neil", "100001", "Customer Profiling", "In Progress",'Branch');
    } else {
      return new ApplicationPannel("201800002", "Neil", "100002", "Customer Profiling", "In Progress", 'Back Office');
    }
  }
}

export class ApplicationPannel {

    constructor(
      public applicationId: string,
      public applicationName: string,
      public applicationCIN: string,
      public stage: string,
      public status: string,
      public originalPos: string
    ) {}
}
