import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';
@Component({
  selector: 'app-complete-personal-info',
  templateUrl: './complete-personal-info.component.html',
  styleUrls: ['./complete-personal-info.component.css']
})
export class CompletePersonalInfoComponent implements OnInit {
  @Input() profileDictionary;
  constructor(private UserProfileService:UserProfileService) { }
  ngOnInit(): void {
  }
  OnSubmitSocial(){
    const profileData= new FormData();
    profileData.append('Facebook_link', this.profileDictionary.userInfo.Facebook_link);
    profileData.append('Linkdin_link', this.profileDictionary.userInfo.Linkdin_link);
    profileData.append('phone', this.profileDictionary.userInfo.phone);
    profileData.append('sms', this.profileDictionary.userInfo.sms);
    profileData.append('profession', this.profileDictionary.userInfo.profession);
    profileData.append('profession', this.profileDictionary.userInfo.profession);
    profileData.append('othersSocialMedia', this.profileDictionary.userInfo.othersSocialMedia);
    profileData.append('twitter', this.profileDictionary.userInfo.twitter);
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      localStorage.setItem('UserInfo', JSON.stringify(returenedData));
      console.log(returenedData)
    });
  }
}
