import { Component } from '@angular/core';

@Component({
  selector: 'CIAOAMIKI',
  templateUrl: './app.component.html',
  //template: `<button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">{{serverCreateStatus}}</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primoprogetto';
  name = 'Testo d\'esempio';
  lastPressed:string="";
  entire:string="";
  
  allowNewServer:boolean=false;
  serverCreateStatus:string=""

  servers=[];
  
  constructor(){
    // setTimeout(() => {
    //   this.allowNewServer=true;
    // },2000)
  }

  onCreateServer(){
    this.allowNewServer=false;
    this.serverCreateStatus=`server was created and the name is ${this.entire}`;
    this.servers.push(this.entire)
    setTimeout(()=>{this.resetServerCreate()},1000)
    
  }

  resetServerCreate(resetEventBinding?:boolean){
    resetEventBinding= resetEventBinding==undefined ? true : resetEventBinding;
    this.entire=""; 
    this.serverCreateStatus="";
    this.allowNewServer=false;
    if (resetEventBinding) (document.getElementById("eventbinding") as HTMLInputElement).value='';
  }

  scrive (event:Event){
    this.resetServerCreate(false);
    console.log("event",event)
    let ievent:InputEvent=event as InputEvent
    console.log("ievent.data",ievent.data)
    let etarget:EventTarget=ievent.target;
    let hielement:HTMLInputElement= etarget as HTMLInputElement;
    console.log("hielement.value",hielement.value)

    this.lastPressed=ievent.data;
    this.entire=hielement.value;
    this.allowNewServer=this.entire!="";
  }
  colorWait(){
    if(this.serverCreateStatus!=="") return "green";
    return this.entire==="" ?  "red" : "darkgoldenrod";
  }
}

