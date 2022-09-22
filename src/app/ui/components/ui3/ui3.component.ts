import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui3',
  templateUrl: './ui3.component.html',
  styleUrls: ['./ui3.component.scss'],
})
export class Ui3Component implements OnInit {
  public close: boolean;

  constructor() {
    this.close = false;
  }

  ngOnInit(): void {}

  public toggle(): void {
    this.close = !this.close;
  }
}
