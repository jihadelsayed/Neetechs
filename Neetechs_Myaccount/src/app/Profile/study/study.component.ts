import { Component, Input, OnInit } from '@angular/core';
import { EditStudierComponent } from '../edit-studier/edit-studier.component';
import { StudiersService } from '../../../AngularServices/studiers.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {

  constructor(private StudiersService: StudiersService,public dialog: MatDialog,private router: ActivatedRoute) { }
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
