import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DeleteAccountComponent } from '../delete-account/delete-account.component';
import { ImageEditComponent } from '../image-edit/image-edit.component';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  SERVER_URL = environment.SERVER_URL_WITH_OUT_SLASH
  @Input() profileDictionary;
  DATAstring = "";
  constructor(private route: Router ,) {


  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async ngOnInit(): Promise<void> {
  }
  openDialogDeleteAccount() {
    console.log(this.profileDictionary.userInfo.site_id)
    console.log(this.profileDictionary.currentUsername)
    const dialogRef = this.profileDictionary.dialog.open(DeleteAccountComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  GoToChatPage() {
    //if (site_id !== threadName){
    //var site_id = threadName.replace(this.userInfo.site_id,'');
    // }
    sessionStorage.setItem('profileChatInfo', JSON.stringify(this.profileDictionary.userInfo));
    //console.log(this.profileDictionary.userInfo)
    this.route.navigate(['/chat/']);
  }

  openDialogEditPersonImage() {
    const dialogRef = this.profileDictionary.dialog.open(ImageEditComponent,{
      // width: '330px',
      // height: '400px',
       data: {
        profileDictionary:this.profileDictionary,
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
