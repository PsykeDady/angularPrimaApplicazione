import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './BasicHighlight/basic-highlight.directive';
import { MioComponente } from './mio.componente';
import { DirettivaStrutturale } from './Strutturale/strutturale.directive';

  @NgModule({
	declarations: [
	  AppComponent,
	  MioComponente,
	  BasicHighlightDirective,
	  DirettivaStrutturale
	],
	imports: [
	  BrowserModule, FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
  })
  export class AppModule { }
