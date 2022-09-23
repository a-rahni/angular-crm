import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  //imports: [BrowserModule, AppRoutingModule, CoreModule], // avec cette ordre tout les module charger au demarrage seront placé après
  // le path ** (l'ordre des import) --> ne seront pas prises en compte (reirigé vers page not found).
  //pour les lazy module pas de pb, ils auront déja leur emplacement dans la tab routing
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
