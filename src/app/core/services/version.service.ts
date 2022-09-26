import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public numVersion: BehaviorSubject<number>;

  constructor() {
    this.numVersion = new BehaviorSubject<number>(1);
  }

  public incrementVersion() {
    // console.log(this.numVersion); // affiche tout l'objet observable avec les propriete
    // console.log(this.numVersion.value);
    this.numVersion.next(this.numVersion.value + 1);
  }
}
