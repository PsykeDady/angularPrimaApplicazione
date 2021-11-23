import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './BasicHighlight/basic-highlight.directive';
import { LogButton } from './button-log.component';
import { MioComponente } from './mio.componente';
import { LoggingService } from './services/logging.service';
import { DirettivaStrutturale } from './Strutturale/strutturale.directive';

  @NgModule({
	declarations: [
	  AppComponent,
	  MioComponente,
	  BasicHighlightDirective,
	  DirettivaStrutturale,
	  LogButton
	],
	imports: [
	  BrowserModule, FormsModule
	],
	providers: [LoggingService],
	bootstrap: [AppComponent]
  })
  export class AppModule { }
