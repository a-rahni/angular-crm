import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //public title = 'crm';
  public title;

  constructor() {
    this.title = 'crm';
  }
}
