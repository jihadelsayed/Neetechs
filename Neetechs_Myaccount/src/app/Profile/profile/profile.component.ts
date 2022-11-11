import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { resultsCategories, resultsSubCategories } from 'src/app/side-bar-left/categories-interface';
import { SpinnerService } from 'src/app/spinner/spinner.service';
import { environment } from 'src/environments/environment';
import { erfarenhetsInterface, intressensInterface, kompetenserInterface, PersonInterface, studiersInterface } from '../profile-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  constructor( private router: ActivatedRoute, public dialog: MatDialog,
    private http: HttpClient, private spinnerService: SpinnerService,
    ) { }

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  currentUsername = this.router.snapshot.params.username;
  userInfo: Observable<PersonInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'UserInfo'));
  LogedInUserInfo: PersonInterface = JSON.parse(localStorage.getItem('UserInfo'));
  loaded = false;
  UserID;
  //categories: resultsCategories = JSON.parse(localStorage.getItem('categories'))
  //subCategoris: resultsSubCategories = JSON.parse(localStorage.getItem('subCategoris'))
  PersonaInfoLoaded = false;

  Intressens:Observable<intressensInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Intressens'));
  Kompetenser_intygs:Observable<kompetenserInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Kompetenser_intygs'));
  Erfarenhets:Observable<erfarenhetsInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Erfarenhets'));
  Studiers:Observable<studiersInterface> = JSON.parse(sessionStorage.getItem(this.currentUsername + 'Studiers'));

  profileDictionary = {
    SERVER_URL: environment.SERVER_URL,
    currentUsername: this.currentUsername,
    userInfo: this.userInfo,
    Intressens : this.Intressens,
    Studiers : this.Studiers,
    Kompetenser_intygs : this.Kompetenser_intygs,
    Erfarenhets : this.Erfarenhets,
    dialog : this.dialog,
    loaded : this.loaded,
    PersonaInfoLoaded: this.PersonaInfoLoaded,
    complete: false,
    LogedInUserInfo:this.LogedInUserInfo,

  };
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async ngOnInit(): Promise<void> {

    this.spinnerService.requestStarted();
    this.currentUsername = this.router.snapshot.params.username
    await this.delay(4);

    this.http.get(environment.SERVER_URL + 'api/allprofileinfo/' + this.profileDictionary.currentUsername,{ headers: this.httpHeaders })
    .subscribe((datauserInfo: Observable<PersonInterface>) => {

      console.log(datauserInfo)
      this.profileDictionary.userInfo = datauserInfo
      this.profileDictionary.Kompetenser_intygs = datauserInfo['Kompetenser_intyg']
      this.profileDictionary.Erfarenhets = datauserInfo['Erfarenhet']
      this.profileDictionary.Studiers = datauserInfo['Studier']
      this.profileDictionary.Intressens = datauserInfo['Intressen']

      sessionStorage.setItem(this.profileDictionary.currentUsername + 'UserInfo', JSON.stringify(datauserInfo));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Kompetenser_intygs', JSON.stringify(datauserInfo['Kompetenser_intyg']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Erfarenhets', JSON.stringify(datauserInfo['Erfarenhet']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Studiers',JSON.stringify(datauserInfo['Studier']));
      sessionStorage.setItem(this.profileDictionary.currentUsername + 'Intressens', JSON.stringify(datauserInfo['Intressen']));
      this.spinnerService.requestEnded();
    });
    this.UserID = JSON.parse(sessionStorage.getItem(this.currentUsername + 'UserInfo'));

    this.profileDictionary.PersonaInfoLoaded = true
    this.profileDictionary.loaded = true
    this.loaded = true
  }
}
export interface Intressens {
  id: number;
  name: string;
  site_id: string;
  updated_at: number;
  username: number;
  Added_at: string;
}
