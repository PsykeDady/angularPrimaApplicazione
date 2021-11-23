import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
	selector:"[strutturale]"
})
export class DirettivaStrutturale {
	constructor ( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ){}
	
	// @Input() set mostra(condizione:boolean){
	// 	if( condizione){
	// 		this.vcRef.createEmbeddedView(this.templateRef);
	// 	}	else {
	// 		this.vcRef.clear();
	// 	}
	// }

	@Input() set strutturale(condizione:boolean){
		if( condizione){
			this.vcRef.createEmbeddedView(this.templateRef);
		}	else {
			this.vcRef.clear();
		}
	}
}