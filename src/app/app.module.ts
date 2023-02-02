import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentPipe } from './pipe';
import { SortableHeaderDirective } from './sortable-header';

@NgModule({
  declarations: [AppComponent, StudentPipe, SortableHeaderDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}