import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditStudierComponent } from '../../edit-studier/edit-studier.component';

@Component({
  selector: 'app-complete-study',
  templateUrl: './complete-study.component.html',
  styleUrls: ['./complete-study.component.css']
})
export class CompleteStudyComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  @Input() profileDictionary;
 // Kompetenser_intygs;

  Studiers= "";
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async ngOnInit(): Promise<void> {

  }
  
  openDialogAddStudier() {
    const edit = false

    const dialogRef = this.dialog.open(EditStudierComponent,{
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
  openDialogEditStudier(study:any) {
    const edit = true

    const dialogRef = this.dialog.open(EditStudierComponent,{
      width: '1000px',
      // height: '400px',
       data: {
         profileDictionary:this.profileDictionary,       
         edit:edit,
         study:study,
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
