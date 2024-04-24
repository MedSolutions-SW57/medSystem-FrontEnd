import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-request-results',
  templateUrl: './request-results.component.html',
  styleUrl: './request-results.component.css'
})
export class RequestResultsComponent {
  columns = ['patient', 'examType', 'fetch', 'results'];

  dates = [new Article('Jose Sanchez', 'Rheumatology', '25-03-24', 'probed'),
    new Article('Carlos Ramirez', 'Rheumatology', '25-03-24', 'probed'),
    new Article('Pablo Escobar', 'Rheumatology', '25-03-24', 'probed'),
  ];

  dataSource:any;

  ngOnInit(){
    this.dataSource =new MatTableDataSource(this.dates);
  }

  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}


export class Article {
  constructor(public patient: string, examType: string, fetch: string, results: string) {
  }
}
