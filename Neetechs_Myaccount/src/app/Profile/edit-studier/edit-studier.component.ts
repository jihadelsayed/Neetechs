import { Component, Inject, OnInit } from '@angular/core';
import { Manader, Years } from 'src/environments/manader';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-studier',
  templateUrl: './edit-studier.component.html',
  styleUrls: ['./edit-studier.component.css']
})
export class EditStudierComponent implements OnInit {



  manader = Manader;
  years = Years;

  ngOnInit(): void {
    if(this.edit == true){
      this.name = this.profileDictionary.study.name;
      this.degree = this.profileDictionary.study.degree;
      this.plats= this.profileDictionary.study.plats;
      this.content= this.profileDictionary.study.content;
      this.started_at= this.profileDictionary.study.started_at;
      this.ended_at= this.profileDictionary.study.ended_at;
      this.id = this.profileDictionary.study.id;
    }


  }
  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any,public dialogRef: MatDialogRef<EditStudierComponent>,) { }

  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });

  userInfo= JSON.parse(localStorage.getItem('UserInfo'));
  public checkedDate:boolean = false;
  public name:any
  public degree:any
  public plats:any
  public content:any
  public edit:boolean = this.profileDictionary.edit;
  public id:any
  public started_at:any;
  public ended_at:any;


  OnAdd(){
    if (this.profileDictionary.profileDictionary.Studiers === null) {
        this.profileDictionary.profileDictionary.Studiers=[]
    }
    const StudiersData= new FormData();
    StudiersData.append('username', this.userInfo.id);
    StudiersData.append('name', this.name);
    StudiersData.append('degree', this.degree);
    StudiersData.append('plats', this.plats);
    StudiersData.append('content', this.content);
    StudiersData.append('started_at', this.started_at);
    StudiersData.append('ended_at', this.ended_at);

    this.http.post(environment.SERVER_URL + 'api/profile/post/Studiers', StudiersData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      this.profileDictionary.profileDictionary.Studiers.push(returenedData);
      sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Studiers', JSON.stringify(this.profileDictionary.profileDictionary.Studiers));

      this.dialogRef.close();
    });
  }
  OnEdit(){

    this.profileDictionary.study.name= this.name;
    this.profileDictionary.study.degree= this.degree;
    this.profileDictionary.study.plats= this.plats;
    this.profileDictionary.study.content= this.content;
    this.profileDictionary.study.started_at= this.started_at;
    this.profileDictionary.study.ended_at= this.ended_at;

    const StudiersData= new FormData();
    StudiersData.append('username', this.userInfo.id);
    StudiersData.append('name', this.name);
    StudiersData.append('degree', this.degree);
    StudiersData.append('plats', this.plats);
    StudiersData.append('content', this.content);
    StudiersData.append('started_at', this.started_at);
    StudiersData.append('ended_at', this.ended_at);
    this.http.put(environment.SERVER_URL + 'api/profile/Studier/'+this.id+"/", StudiersData, { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      console.log(returenedData)
      this.dialogRef.close();

      //window.location.reload()
    });
  }

  OnDelete(){
    this.http.delete(environment.SERVER_URL + 'api/profile/Studier/'+this.id+"/", { headers: this.authenticateHttpHeaders }).subscribe(returenedData => {
      console.log(returenedData)
      this.dialogRef.close();

      const index = this.profileDictionary.profileDictionary.Studiers.indexOf(this.profileDictionary.study);
      this.profileDictionary.profileDictionary.Studiers.splice(index, 1);

      sessionStorage.setItem(this.profileDictionary.profileDictionary.currentUsername + 'Studiers', JSON.stringify(this.profileDictionary.profileDictionary.Studiers));

      //window.location.reload()
    });
  }
}
