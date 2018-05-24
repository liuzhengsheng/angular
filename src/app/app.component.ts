import {Component, Input, Output} from '@angular/core';
import {EclipseLiteUserProfile} from './Common/EclipseLiteUserProfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UserProfile: EclipseLiteUserProfile;
}
