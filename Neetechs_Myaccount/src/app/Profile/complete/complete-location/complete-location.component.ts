import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { User } from 'src/app/shared/user.model';
import { Kommuner } from 'src/environments/kommun';
import { LanKommun } from 'src/environments/state';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';

@Component({
  selector: 'app-complete-location',
  templateUrl: './complete-location.component.html',
  styleUrls: ['./complete-location.component.css']
})
export class CompleteLocationComponent implements OnInit {
  @Input() profileDictionary;
  StateSelectedValue: string;
  constructor(private UserProfileService:UserProfileService) { }
  LanKommun = LanKommun
  Kommun = LanKommun
  LanKommun$: Observable<any>;
  stateControl = new FormControl('', Validators.required);
  stateOptions: any[] = LanKommun;
  filteredCityOptions: Observable<string[]>;
  //stateControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('--', Validators.required);
  // options: User[] = Kommuner;
  filteredOptions: Observable<User[]>;
  ngOnInit(): void {
    this.filteredCityOptions = this.stateControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      map(value => this.city_filter(value))
    );
  }
  private city_filter(value: string): string[] {
    const filterValue = value.toString().substring(2,4);
    return this.stateOptions.filter(option => option.id.toString().substring(0,2).includes(filterValue));
  }
  OnSubmitPlats(){
    const profileData= new FormData();
    profileData.append('city', this.profileDictionary.userInfo.city);
    profileData.append('state', this.profileDictionary.userInfo.state);
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      localStorage.setItem('UserInfo', JSON.stringify(returenedData));
    });
  }
}
