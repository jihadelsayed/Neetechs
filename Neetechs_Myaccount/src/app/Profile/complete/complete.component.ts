import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';

import {Observable} from 'rxjs';
import { LanKommun } from 'src/environments/state';
import { Kommuner } from 'src/environments/kommun';
import { MatDialog } from '@angular/material/dialog';

import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EditKompetenserComponent } from '../edit-kompetenser/edit-kompetenser.component';
import { EditIntressenComponent } from '../edit-intressen/edit-intressen.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { erfarenhetsInterface, intressensInterface, kompetenserInterface, PersonInterface, studiersInterface } from '../profile-interface';
import { Router } from '@angular/router';


export interface User {
  name: string;
}

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CompleteComponent implements OnInit {

  userInfo:PersonInterface= JSON.parse(localStorage.getItem('UserInfo'));
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  currentUsername = this.userInfo["site_id"]
  Intressens:Observable<intressensInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Intressens'));
  Kompetenser_intygs:Observable<kompetenserInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Kompetenser_intygs'));
  Erfarenhets:Observable<erfarenhetsInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Erfarenhets'));
  Studiers:Observable<studiersInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Studiers'));
  loaded = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  PersonaInfoLoaded = false;
  profileDictionary = {
    SERVER_URL: environment.SERVER_URL,
    currentUsername: this.currentUsername,
    userInfo: this.userInfo,
    Intressens : this.Intressens,
    Studiers : this.Studiers,
    Kompetenser_intygs : this.Kompetenser_intygs,
    Erfarenhets : this.Erfarenhets,
    dialog : this.dialog,
    complete: true,
    loaded : this.loaded,
    PersonaInfoLoaded: this.PersonaInfoLoaded,
  };

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog, private UserProfileService:UserProfileService,
    private http: HttpClient, private spinnerService: SpinnerService,private router : Router
    ) { }

  ngOnInit(): void {
   // this.spinnerService.requestStarted();
    /**
    this.http.get(environment.SERVER_URL + 'api/allprofileinfo/' + this.profileDictionary.currentUsername,{ headers: this.httpHeaders })
    .subscribe((datauserInfo: PersonInterface) => {
      this.profileDictionary.userInfo = datauserInfo
      console.log(datauserInfo)
      this.profileDictionary.userInfo = datauserInfo
      this.profileDictionary.Kompetenser_intygs = datauserInfo['Kompetenser_intyg']
      this.profileDictionary.Erfarenhets = datauserInfo['Erfarenhet']
      this.profileDictionary.Studiers = datauserInfo['Studier']
      this.profileDictionary.Intressens = datauserInfo['Intressen']
      localStorage.setItem('UserInfo', JSON.stringify(datauserInfo));
      localStorage.setItem(this.profileDictionary.currentUsername + 'UserInfo', JSON.stringify(datauserInfo));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Kompetenser_intygs', JSON.stringify(datauserInfo['Kompetenser_intyg']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Erfarenhets', JSON.stringify(datauserInfo['Erfarenhet']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Studiers',JSON.stringify(datauserInfo['Studier']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Intressens', JSON.stringify(datauserInfo['Intressen']));
      this.spinnerService.requestEnded();
    });
    */
    this.profileDictionary.userInfo = this.userInfo
    this.profileDictionary.Kompetenser_intygs = this.userInfo['Kompetenser_intyg']
    this.profileDictionary.Erfarenhets = this.userInfo['Erfarenhet']
    this.profileDictionary.Studiers = this.userInfo['Studier']
    this.profileDictionary.Intressens = this.userInfo['Intressen']
    localStorage.setItem('UserInfo', JSON.stringify(this.userInfo));
    localStorage.setItem(this.profileDictionary.currentUsername + 'UserInfo', JSON.stringify(this.userInfo));
    sessionStorage.setItem(this.profileDictionary.currentUsername + 'Kompetenser_intygs', JSON.stringify(this.userInfo['Kompetenser_intyg']));
    sessionStorage.setItem(this.profileDictionary.currentUsername + 'Erfarenhets', JSON.stringify(this.userInfo['Erfarenhet']));
    sessionStorage.setItem(this.profileDictionary.currentUsername + 'Studiers',JSON.stringify(this.userInfo['Studier']));
    sessionStorage.setItem(this.profileDictionary.currentUsername + 'Intressens', JSON.stringify(this.userInfo['Intressen']));

    this.profileDictionary.PersonaInfoLoaded = true
    this.profileDictionary.loaded = true
    this.loaded = true
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.nullValidator]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.nullValidator]
    });  
}
  OnProfileCompleted(){
    const profileData= new FormData();
    profileData.append('profile_completed', '1');
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      localStorage.setItem('UserInfo', JSON.stringify(returenedData));
    });
    this.router.navigate(['search']).then(() => {
      location.reload();
    });
  }

  openDialogEditIntressen() {
    const dialogRef = this.profileDictionary.dialog.open(EditIntressenComponent ,{
      width: '600px',
     // height: '400px',
      data: {
        profileDictionary:this.profileDictionary
      }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEditKompetenser() {
    const dialogRef = this.profileDictionary.dialog.open(EditKompetenserComponent,{
      width: '600px',
      // height: '400px',
       data: {
         profileDictionary:this.profileDictionary,
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
