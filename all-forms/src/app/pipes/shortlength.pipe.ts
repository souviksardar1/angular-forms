import { PipeTransform , Pipe } from "@angular/core";

@Pipe({
    name: 'sortlength'
})

export class ReduceLengthPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
       return value.substr(0, +args);
    }
}