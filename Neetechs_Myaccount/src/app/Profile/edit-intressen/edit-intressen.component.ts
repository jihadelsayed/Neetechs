import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-edit-intressen',
  templateUrl: './edit-intressen.component.html',
  styleUrls: ['./edit-intressen.component.css']
})



export class EditIntressenComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any,public dialogRef: MatDialogRef<EditIntressenComponent>,) { }
  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });
  userInfo= JSON.parse(localStorage.getItem('UserInfo'));
  public IntressenName:any;
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;



    // Add our fruit
    if ((value || '').trim()) {
      if (this.profileDictionary.profileDictionary.Intressens === null) {
        this.profileDictionary.profileDictionary.Intressens=[]
      
    }
    //console.log(this.profileDictionary.profileDictionary.Intressens.results)

      const serviceData= new FormData();
      serviceData.append('name', value.trim());
      serviceData.append('username', this.userInfo.id);

      this.http.post(environment.SERVER_URL + 'api/profile/post/Intressens', serviceData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
        //console.log(returenedData)
        // if (this.profileDictionary.complete = false){

          this.profileDictionary.profileDictionary.Intressens.push({id:returenedData['id'],name: value.trim(),username:this.userInfo.id,site_id:this.userInfo.site_id});
        //}
        sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Intressens', JSON.stringify(this.profileDictionary.profileDictionary.Intressens));
 
      });
          // Reset the input value
      if (input) {
        input.value = '';
      }
    }


  }

  remove(intressen): void {


    this.http.delete(environment.SERVER_URL + 'api/profile/Intressen/'+intressen.id+"", { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      //console.log(returenedData)
      const index = this.profileDictionary.profileDictionary.Intressens.indexOf(intressen);

      if (index >= 0) {
        this.profileDictionary.profileDictionary.Intressens.splice(index, 1);
  
      }
      sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Intressens', JSON.stringify(this.profileDictionary.profileDictionary.Intressens));
  
    });
  }
  ngOnInit(): void {
  }


  OnSubmit(){

  }
}
