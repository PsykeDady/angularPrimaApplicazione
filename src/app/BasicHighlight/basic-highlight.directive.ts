import { Directive, ElementRef, HostBinding, HostListener, Renderer2  } from '@angular/core';

@Directive({ selector: '[appBasicHighlight]' })
export class BasicHighlightDirective {

	@HostBinding('style.textShadow') contorno:string ;
	
	static readonly contornoRosso : string = "0px 0px 1px red"; 
	static readonly contornoNormale : string = "0px 0px 0px transparent";

	// constructor(private el: ElementRef ,private renderer: Renderer2) {
	// }

	@HostListener('mouseenter') mouseover (eventData:Event) {
		//this.renderer.setStyle(this.el.nativeElement, "text-shadow", "0px 0px 1px red")
		this.contorno=BasicHighlightDirective.contornoRosso;
	}

	@HostListener('mouseleave') mouseleave (eventData:Event) {
		//this.renderer.setStyle(this.el.nativeElement, "text-shadow", "0px 0px 0px transparent")
		this.contorno=BasicHighlightDirective.contornoNormale;
	}
}