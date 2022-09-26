import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@NgModule({
  declarations: [AppComponent],
  //imports: [BrowserModule, AppRoutingModule, CoreModule], // avec cette ordre tout les module charger au demarrage seront placé après
  // le path ** (l'ordre des import) --> ne seront pas prises en compte (reirigé vers page not found).
  //pour les lazy module pas de pb, ils auront déja leur emplacement dans la tab routing
  imports: [BrowserModule, CoreModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // tests observables, subjects and behaviorSusbject
  //private obs = new Observable((listXsubscribe) => {
  //  listXsubscribe.next(Math.random());
  //});

  //private subj = new Subject();
  //private behave = new BehaviorSubject(0);

  constructor() {
    // console.log('**** observable ***');
    // // observable a froid
    // // a chaque subscribe une nouvelle valeur est affiché
    // // lors de 2eme subscribe, le premier n'est notitfié, il faut unsubscribe et subscribe a nouveau
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // this.obs.subscribe((data) => console.log(data));
    // console.log('**** subject : observable a chaud ***');
    // // lors d'une modif de la valeur de l'observable via methode next, tous les observateurs déja enregistré seront notifié
    // //et ferons le traitement (console log)
    // // si après la modification, il y a observateur qui va s'incrire il ne sera notifié qu'au prochain changement
    // // observable notifier la nouvelle valeur puis il oubli la valeur(devient vide)==> nouv subscribe rien faire
    // // test1 et test2 ne sont affiché que par le premier subscribe
    // // le randome (meme valeur) est affiché seulement par les deux dern
    // // exp les deux derniers subscribe vont recuperé la valeur du randome (dui était éja notifier au deux premiers subscribe
    // // donc log de la même valeur randome 4 fois.
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next('test1');
    // this.subj.next('test 2');
    // this.subj.subscribe((data) => console.log(data));
    // this.subj.next(Math.random());
    // this.subj.subscribe((data) => console.log(data));
    // console.log('**** behaviour subject : observable a chaud***');
    // // lors d'une modif tous les observateurs déja enregistré seront notifié et ferons le traitement (console log)
    // // si après la modification, il y a observateur qui va s'incrire il recupere à chaud la velur de l'observable
    // // exp les deux derniers subscribe vont recuperé la valeur du randome (dui était éja notifier au deux premiers subscribe
    // // donc log de la même valeur randome 4 fois.
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(1);
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.next(2);
    // this.behave.next(Math.random());
    // this.behave.subscribe((data) => console.log(data));
    // this.behave.subscribe((data) => console.log(data));
  }
}
