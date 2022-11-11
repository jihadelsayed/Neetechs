import { Component, Input, OnInit } from '@angular/core';
import { LanKommun } from 'src/environments/state';
import { EditPersronUppgifterComponent } from '../edit-persron-uppgifter/edit-persron-uppgifter.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() profileDictionary;

  constructor() { }

  ngOnInit(): void {
  }
  LanKommun = LanKommun

  openDialogEditPersonUppgifter() {
    const dialogRef = this.profileDictionary.dialog.open(EditPersronUppgifterComponent,{
      width: '1000px',
      
      // height: '400px',
       data: {
         profileDictionary:this.profileDictionary
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
