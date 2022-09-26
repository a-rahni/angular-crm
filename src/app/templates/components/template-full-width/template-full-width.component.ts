import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit, OnChanges {
  @Input() public title: string;
  constructor() {
    this.title = 'Le titre est ici';
    console.log(this.title);
  }

  // lifeCycle hooks: eviter de trop utiliser ngOnChanges pour des raison de performance
  // elle s'execute a chaque fois il y a un changement
  ngOnChanges(): void {
    console.log(this.title);
  }
  ngOnInit(): void {
    console.log(this.title);
  }
}
