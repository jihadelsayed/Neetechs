import { Component, Input, OnInit } from '@angular/core';
import { EditKompetenserComponent } from '../edit-kompetenser/edit-kompetenser.component';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent implements OnInit {
  @Input() profileDictionary;
  Kompetenser_intygs;

  constructor() { }

  ngOnInit(): void {
    this.Kompetenser_intygs = this.profileDictionary.Kompetenser_intygs
  }
  openDialogEditKompetenser() {
    const dialogRef = this.profileDictionary.dialog.open(EditKompetenserComponent,{
      width: '600px',
      // height: '400px',
       data: {
         profileDictionary:this.profileDictionary
       }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
