import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './components/ui2/ui2.component';
import { UiComponent } from './components/ui/ui.component';
import { Ui3Component } from './components/ui3/ui3.component';

@NgModule({
  declarations: [Ui2Component, UiComponent, Ui3Component],
  imports: [CommonModule],
  exports: [Ui2Component, UiComponent, Ui3Component],
})
export class UiModule {}
