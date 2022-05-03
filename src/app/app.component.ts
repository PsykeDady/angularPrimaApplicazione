import { Component } from '@angular/core';


@Component({
  selector: 'CIAOAMIKI',
  templateUrl: './app.component.html',
  //template: `<button class="btn btn-primary" [disabled]="!allowNewServer" (click)="onCreateServer()">{{serverCreateStatus}}</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primoprogetto';
  dataOggi: Date = new Date();
  name = 'Testo d\'esempio';
  lastPressed:string="";
  entire:string="";
  soldi:number=123
  decimale:number=Math.PI
  testoLungo:string="Nel mezzo dell'esecuzione di mia vita, mi ritrovai per una classe oscura, che lo retto flusso era smarrito"
  
  allowNewServer:boolean=false;
  serverCreateStatus:string=""

  valore=-1;

  servers=[];

  values=["ciao","come","stai","davide","emanuele","giancarlo"];
  filtro=""

  promise:Promise<string> = new Promise ((resolve,reject)=> {
	setTimeout( () => {resolve("son passati 3 secondi")},3000)
  })
  
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

  addValue(){
	const acode:number = "a".charCodeAt(0)
	const Acode:number = "A".charCodeAt(0)
	let randomName:string="";
	for(let i=0; i<8; i++){
		let numero: number = Math.floor( Math.random()*26);
		let maiuscola:boolean = Math.random()>0.5;
		let lettera:string = String.fromCharCode((maiuscola?Acode:acode)+numero)
		randomName+=lettera
	}
	this.values.push(randomName)
  }
}

