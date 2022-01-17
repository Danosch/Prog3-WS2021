import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ToolbarComponent]
})
export class UiModule {}
