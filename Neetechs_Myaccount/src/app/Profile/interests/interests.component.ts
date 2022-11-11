import { Component, Input, OnInit } from '@angular/core';
import { EditIntressenComponent } from '../edit-intressen/edit-intressen.component';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  @Input() profileDictionary;

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
  constructor() { }

  ngOnInit(): void {
  }

}
