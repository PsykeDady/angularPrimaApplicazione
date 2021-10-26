  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppComponent } from './app.component';
import { MioComponente } from './mio.componente';

  @NgModule({
    declarations: [
      AppComponent,
      MioComponente
    ],
    imports: [
      BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
