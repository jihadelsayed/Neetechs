import { Component, Input, OnInit } from '@angular/core';
import { EditErfarenhetComponent } from '../edit-erfarenhet/edit-erfarenhet.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() profileDictionary;
  Erfarenhets;

  constructor() { }

  ngOnInit(): void {
    this.Erfarenhets = this.profileDictionary.Erfarenhets

  }
  
  openDialogEditErfarenhet(experience) {
    const edit = true
    const dialogRef = this.profileDictionary.dialog.open(EditErfarenhetComponent,{
      width: '1000px',
      // height: '400px',
       data: {
        profileDictionary:this.profileDictionary,
        edit:edit,
        experience:experience,
      }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogAddErfarenhet() {
    const edit = false
    const dialogRef = this.profileDictionary.dialog.open(EditErfarenhetComponent,{
      width: '1000px',
      // height: '400px',
       data: {
        profileDictionary:this.profileDictionary,
        edit:edit
      }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
