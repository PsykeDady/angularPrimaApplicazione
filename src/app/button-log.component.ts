import { Component } from "@angular/core";
import { LoggingService } from "./services/logging.service";

@Component({
	selector:"app-button-log",
	template:`
		<button type="button" class="btn btn-default" (click)="log()">Log</button>
	`,
})
export class LogButton{

	constructor(private logger:LoggingService){}
	
	log(){
		this.logger.logToConsole("premuto il pulsante!");
	}
}