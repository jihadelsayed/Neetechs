import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';

@Component({
  selector: 'app-edit-om',
  templateUrl: './edit-om.component.html',
  styleUrls: ['./edit-om.component.css']
})
export class EditOMComponent implements OnInit {

  constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public profileDictionary: any, private UserProfileService:UserProfileService,public dialogRef: MatDialogRef<EditOMComponent>,) { }

  ngOnInit(): void {
  }
  about:any = this.profileDictionary.profileDictionary.userInfo.about
  OnSubmit(){
    const profileData= new FormData();
    profileData.append('about', this.about);
    this.UserProfileService.patchProfile(profileData,this.profileDictionary.profileDictionary.userInfo.site_id).subscribe(returenedData => {
      console.log(returenedData)
      this.dialogRef.close();
      this.profileDictionary.profileDictionary.userInfo.about = this.about
    });
  }
}
