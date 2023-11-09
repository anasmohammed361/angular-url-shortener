// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add this line to import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
