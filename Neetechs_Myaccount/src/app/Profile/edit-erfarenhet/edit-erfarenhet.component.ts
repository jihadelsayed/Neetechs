import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// tslint:disable-next-line:no-duplicate-imports
import { environment } from 'src/environments/environment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {MatDatepicker} from '@angular/material/datepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';
import * as _moment from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-edit-erfarenhet',
  templateUrl: './edit-erfarenhet.component.html',
  styleUrls: ['./edit-erfarenhet.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EditErfarenhetComponent implements OnInit {


  starteddate = new FormControl(moment());
  endeddate = new FormControl(moment());

  startedChosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.starteddate.value;
    ctrlValue.year(normalizedYear.year());
    this.starteddate.setValue(ctrlValue);
  }

  startedChosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.starteddate.value;
    ctrlValue.month(normalizedMonth.month());
    this.starteddate.setValue(ctrlValue);
    datepicker.close();
    console.log(ctrlValue)
    //console.log((moment(ctrlValue._d)).format('DD-MMM-YYYY HH:mm:ss'))

  }
  endedChosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.endeddate.value;
    ctrlValue.year(normalizedYear.year());
    this.endeddate.setValue(ctrlValue);
  }

  endedChosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.endeddate.value;
    ctrlValue.month(normalizedMonth.month());
    this.endeddate.setValue(ctrlValue);
    datepicker.close();
    console.log(ctrlValue)
  }
  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any,public dialogRef: MatDialogRef<EditErfarenhetComponent>,) { }

  //experience Erfarenhets

  ngOnInit(): void {
    if(this.edit == true){
      this.name = this.profileDictionary.experience.name;
      this.plats= this.profileDictionary.experience.plats;
      this.company= this.profileDictionary.experience.company;
      this.content= this.profileDictionary.experience.content;
      this.id = this.profileDictionary.experience.id;
    }


  }
  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });

  userInfo= JSON.parse(localStorage.getItem('UserInfo'));
  public checkedDate:boolean = false;
  public edit:boolean = this.profileDictionary.edit;
  public id:any
  public name:any
  public plats:any
  public company:any
  public content:any
  OnAdd(){
    console.log(this.starteddate)
    //{{ experience.started_at['month']}}+{{experience.started_at['year'] }} -- >{{ experience.ended_at['month']}}+{{experience.ended_at['year'] }} . {{ experience.ended_at['year']-experience.started_at['year'] }} år
    const starteddate = this.starteddate.value._d.month + this.starteddate.value._d.year
    const serviceData= new FormData();
    serviceData.append('name', this.name);
    serviceData.append('company', this.company);
    serviceData.append('plats', this.plats);
    serviceData.append('content', this.content);
    serviceData.append('started_at', starteddate);
    serviceData.append('username', this.userInfo.id);

    if (this.checkedDate== false){
      const endeddate = "--" + this.endeddate.value._d.month + this.endeddate.value._d.year + "." + (this.starteddate.value._d.year - this.endeddate.value._d.year) + "år"
      console.log(starteddate +  endeddate)
      serviceData.append('ended_at', endeddate);
    }

    this.http.post(environment.SERVER_URL + 'api/profile/post/Erfarenhets', serviceData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      this.dialogRef.close();
      this.profileDictionary.profileDictionary.Erfarenhets.push(returenedData);


      //window.location.reload()
    });
  }
  OnEdit(){
    console.log(this.starteddate)

    this.profileDictionary.experience.name= this.name;
    this.profileDictionary.experience.company= this.company;
    this.profileDictionary.experience.plats= this.plats;
    this.profileDictionary.experience.content= this.content;
    this.profileDictionary.experience.started_at= this.starteddate.value._d.month+"/"+this.starteddate.value._d.year;
    this.profileDictionary.experience.ended_at= this.endeddate.value._d.month+"/"+this.endeddate.value._d.year;

    const serviceData= new FormData();
    serviceData.append('name', this.name);
    serviceData.append('company', this.company);
    serviceData.append('plats', this.plats);
    serviceData.append('content', this.content);
    serviceData.append('started_at', JSON.stringify(this.starteddate.value._d));
    serviceData.append('username', this.userInfo.id);

    if (this.checkedDate== false){
      serviceData.append('ended_at', JSON.stringify(this.endeddate.value._d));
    }

    this.http.put(environment.SERVER_URL + 'api/profile/Erfarenhet/'+this.id+"/", serviceData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      console.log(returenedData);

      sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Erfarenhets', JSON.stringify(this.profileDictionary.profileDictionary.Erfarenhets));
      this.dialogRef.close();

      //window.location.reload()
    });
  }
  OnDelete(){
    const index = this.profileDictionary.profileDictionary.Erfarenhets.indexOf(this.profileDictionary.experience);

    if (index >= 0) {
      this.profileDictionary.profileDictionary.Erfarenhets.splice(index, 1);

    }
    this.http.delete(environment.SERVER_URL + 'api/profile/Erfarenhet/'+this.id+"/", { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      console.log(returenedData)
      this.dialogRef.close();
      sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Erfarenhets', JSON.stringify(this.profileDictionary.profileDictionary.Erfarenhets));

      //window.location.reload()
    });
  }
}
