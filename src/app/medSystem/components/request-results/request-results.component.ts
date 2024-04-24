import { Component } from '@angular/core';

@Component({
  selector: 'app-request-results',
  templateUrl: './request-results.component.html',
  styleUrl: './request-results.component.css'
})
export class RequestResultsComponent {
  searchOptions = 'name';
  searchParams = {
    name: '',
    type: '',
    date: ''
  };

  search() {
    console.log(this.searchParams);
  }
}
