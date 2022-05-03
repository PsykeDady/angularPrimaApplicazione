import { Pipe, PipeTransform } from "@angular/core";

@Pipe({"name":"filtra","pure":false})
export class MyFilterPipe implements PipeTransform {
	transform(value: string[], filter:string) {
		return value.filter(v => v.match(new RegExp(`.*${filter}.*`)))
	}
}