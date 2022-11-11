import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';

@Component({
  selector: 'app-complete-about',
  templateUrl: './complete-about.component.html',
  styleUrls: ['./complete-about.component.css']
})
export class CompleteAboutComponent implements OnInit {
  @Input() profileDictionary;
  constructor(private UserProfileService:UserProfileService) { }
  ngOnInit(): void {

  }
  OnSubmitAbout(){
    const profileData= new FormData();
    profileData.append('about', this.profileDictionary.userInfo.about);
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      localStorage.setItem('UserInfo', JSON.stringify(returenedData));
    });
  }
}
