import { Component } from "@angular/core";

@Component({
	selector:'miocomponente',
	templateUrl:"mio.componente.html",
	styleUrls:["./mio.componente.css"]
})
export class MioComponente{
	static maxID:number=0;
	serverID:number =0;

	
	serverStatus:string=Math.random()<0.5?"offline":"online";
	
	constructor(){
		this.serverID=MioComponente.maxID;
		MioComponente.maxID++;
	}

	resultColor(){
		return {color:"white",backgroundColor:this.resultBColor()};
	}

	resultBColor(){
		return this.serverStatus=="offline" ? "red": "green";
	}

}
