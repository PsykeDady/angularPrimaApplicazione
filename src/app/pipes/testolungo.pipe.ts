import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
	name:"testolungo"
})
export class TestoLungoPipe implements PipeTransform{

	/**
	 * 
	 * @param value 
	 * @param args 
	 * @returns 
	 */
	transform(value: string, length?:number, startIndex?:number) :string {

		length=length?length:15;
		startIndex=startIndex?startIndex:0;

		startIndex = startIndex>=value.length? value.length-1 : startIndex;
		let endIndex = length + startIndex; 

		endIndex = endIndex > value.length ? value.length : endIndex;

		let testo: string = value.substring(startIndex,endIndex);
		testo = startIndex==0? testo : "..."+testo;
		testo = length + startIndex < value.length ? testo + "..." : testo; 
		return testo;
	}
}