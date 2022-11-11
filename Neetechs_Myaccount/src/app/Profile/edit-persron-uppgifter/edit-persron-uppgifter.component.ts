import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { LanKommun } from 'src/environments/state';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';



@Component({
  selector: 'app-edit-persron-uppgifter',
  templateUrl: './edit-persron-uppgifter.component.html',
  styleUrls: ['./edit-persron-uppgifter.component.css']
})
export class EditPersronUppgifterComponent implements OnInit {
  othersSocialMedia:any = this.profileDictionary.profileDictionary.userInfo.othersSocialMedia
  Facebook_link:any = this.profileDictionary.profileDictionary.userInfo.Facebook_link
  Linkdin_link:any = this.profileDictionary.profileDictionary.userInfo.Linkdin_link
  state: any = this.profileDictionary.profileDictionary.userInfo.state;
  city:any = this.profileDictionary.profileDictionary.userInfo.city
  email:any = this.profileDictionary.profileDictionary.userInfo.email
  first_name:any = this.profileDictionary.profileDictionary.userInfo.first_name
  profession:any = this.profileDictionary.profileDictionary.userInfo.profession
  phone:any = this.profileDictionary.profileDictionary.userInfo.phone

  stateControl = new FormControl('', Validators.required);
  filteredCityOptions: Observable<string[]>;
  stateOptions: any[] = LanKommun;
  LanKommun = LanKommun

  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any, private UserProfileService:UserProfileService,public dialogRef: MatDialogRef<EditPersronUppgifterComponent>,) { }

  ngOnInit() {

    this.filteredCityOptions = this.stateControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      map(value => this.city_filter(value)),
    );
  }

  private city_filter(value: string): string[] {
    console.log(this.state)

    const filterValue = value.toString().substring(2,4);
    return this.stateOptions.filter(option => option.id.toString().substring(0,2).includes(filterValue));
  }
  
  twitter

  OnSubmit(){
    const profileData= new FormData();
    profileData.append('Facebook_link', this.Facebook_link);
    profileData.append('Linkdin_link', this.Linkdin_link);
    profileData.append('othersSocialMedia', this.othersSocialMedia);
    profileData.append('first_name', this.first_name);
    profileData.append('phone', this.phone);
    profileData.append('email', this.email);
    profileData.append('profession', this.profession);
    profileData.append('city', this.city);
    profileData.append('state', this.state);
    profileData.append('twitter', this.twitter);
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      console.log(returenedData)
      this.profileDictionary.profileDictionary.userInfo.othersSocialMedia = this.othersSocialMedia
      this.profileDictionary.profileDictionary.userInfo.Facebook_link = this.Facebook_link
      this.profileDictionary.profileDictionary.userInfo.Linkdin_link = this.Linkdin_link
      this.profileDictionary.profileDictionary.userInfo.city = this.city
      this.profileDictionary.profileDictionary.userInfo.state = this.state
      this.profileDictionary.profileDictionary.userInfo.email = this.email
      this.profileDictionary.profileDictionary.userInfo.first_name = this.first_name
      this.profileDictionary.profileDictionary.userInfo.profession = this.profession
      this.profileDictionary.profileDictionary.userInfo.phone = this.phone
      this.profileDictionary.profileDictionary.userInfo.twitter = this.twitter


      this.dialogRef.close();

    });
  }
}
