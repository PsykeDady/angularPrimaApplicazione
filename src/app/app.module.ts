import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './BasicHighlight/basic-highlight.directive';
import { LogButton } from './button-log.component';
import { MioComponente } from './mio.componente';
import { MyFilterPipe } from './pipes/filter.pipe';
import { TestoLungoPipe } from './pipes/testolungo.pipe';
import { LoggingService } from './services/logging.service';
import { DirettivaStrutturale } from './Strutturale/strutturale.directive';

  @NgModule({
	declarations: [
	  AppComponent,
	  MioComponente,
	  BasicHighlightDirective,
	  DirettivaStrutturale,
	  LogButton,
	  TestoLungoPipe,
	   MyFilterPipe
	],
	imports: [
	  BrowserModule, FormsModule
	],
	providers: [LoggingService],
	bootstrap: [AppComponent]
  })
  export class AppModule { }
