import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';


export interface Kompetens {
  name: string;
}

@Component({
  selector: 'app-edit-kompetenser',
  templateUrl: './edit-kompetenser.component.html',
  styleUrls: ['./edit-kompetenser.component.css']
})
export class EditKompetenserComponent implements OnInit {


  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any,public dialogRef: MatDialogRef<EditKompetenserComponent>,) { }
  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });
  userInfo= JSON.parse(localStorage.getItem('UserInfo'));
  public Kompetenser_intygsName:any;

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (this.profileDictionary.profileDictionary.Kompetenser_intygs === null) {
        this.profileDictionary.profileDictionary.Kompetenser_intygs=[]
      
    }
      //console.log(this.profileDictionary.profileDictionary.Kompetenser_intygs.results)

      const serviceData= new FormData();
      serviceData.append('name', value.trim());
      serviceData.append('username', this.userInfo.id);

      this.http.post(environment.SERVER_URL + 'api/profile/post/Kompetenser_intygs', serviceData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
       // console.log(returenedData)
        this.profileDictionary.profileDictionary.Kompetenser_intygs.push({id:returenedData['id'],name: value.trim(),username:this.userInfo.id,site_id:this.userInfo.site_id});
        sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Kompetenser_intygs', JSON.stringify(this.profileDictionary.profileDictionary.Kompetenser_intygs));

      });
          // Reset the input value
      if (input) {
        input.value = '';
      }
    }

  }

  remove(Kompetenser_intygs): void {
    //console.log(this.profileDictionary.profileDictionary.Kompetenser_intygs)

    this.http.delete(environment.SERVER_URL + 'api/profile/Kompetenser_intyg/'+Kompetenser_intygs.id+"", { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
    //  console.log(returenedData)
    });
    const index = this.profileDictionary.profileDictionary.Kompetenser_intygs.indexOf(Kompetenser_intygs);

    if (index >= 0) {
      this.profileDictionary.profileDictionary.Kompetenser_intygs.splice(index, 1);

    }

    sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Kompetenser_intygs', JSON.stringify(this.profileDictionary.profileDictionary.Kompetenser_intygs));

  }


 

  ngOnInit(): void {
  }



  OnSubmit(){
    const serviceData= new FormData();
    serviceData.append('name', this.Kompetenser_intygsName);
    serviceData.append('username', this.userInfo.id);

    this.http.post(environment.SERVER_URL + 'api/profile/post/Kompetenser_intygs', serviceData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      //console.log(returenedData)
      this.dialogRef.close();

    });
  }
}
