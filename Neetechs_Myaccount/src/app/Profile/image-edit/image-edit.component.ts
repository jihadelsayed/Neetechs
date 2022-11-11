import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileService } from 'src/app/AngularServices/user-profile.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  constructor(public fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public profileDictionary: any, private UserProfileService:UserProfileService,public dialogRef: MatDialogRef<ImageEditComponent>,) {
    // Reactive Form
}
picture:any

  ngOnInit(): void {

  }
  imageFile:any;
  showPreview(event) {
    this.imageFile = (event.target as HTMLInputElement).files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.picture = reader.result as string;

    }
    reader.readAsDataURL(this.imageFile)
    }
    uploadImage() {
      if(this.imageFile !== undefined){
        const profileData= new FormData();
        profileData.append('picture', this.imageFile,this.imageFile.name);
        this.UserProfileService.patchProfile(profileData,this.profileDictionary.profileDictionary.userInfo.site_id).subscribe(returenedData => {
          console.log(returenedData.picture)
          this.dialogRef.close();
          this.profileDictionary.profileDictionary.userInfo.picture = returenedData.picture
        });
      }
      }
}
