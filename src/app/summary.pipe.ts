import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    
    transform(value: string, limit?: number, isUpper?:boolean) {
        if(!value){
            return null;
        }
        let actualLimit = (limit) ? limit : 30;
        let temp = value.substring(0,actualLimit) + '...';
        if(isUpper){
            return temp.toUpperCase();
        }
        return temp;
    }

}