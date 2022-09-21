import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ui2Component } from './components/ui2/ui2.component';
import { UiComponent } from './components/ui/ui.component';

@NgModule({
  declarations: [Ui2Component, UiComponent],
  imports: [CommonModule],
  exports: [Ui2Component, UiComponent],
})
export class UiModule {}
