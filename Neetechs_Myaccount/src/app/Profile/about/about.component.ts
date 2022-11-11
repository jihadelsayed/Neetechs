import { Component, Input, OnInit } from '@angular/core';
import { EditOMComponent } from '../edit-om/edit-om.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() profileDictionary;

  constructor() { }

  ngOnInit(): void {
  }
  openDialogOm() {
    const dialogRef = this.profileDictionary.dialog.open(EditOMComponent,{
      // width: '330px',
      // height: '400px',
       data: {
         profileDictionary:this.profileDictionary
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
