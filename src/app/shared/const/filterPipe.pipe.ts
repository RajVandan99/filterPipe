import { Pipe, PipeTransform } from "@angular/core";
import { Iplayers } from "../model/interface";

@Pipe({
    name : 'filterTeam'
})
export class FilterPipe implements PipeTransform{
    transform(value:Array<Iplayers>, searchInput:string):Array<Iplayers> {
        // console.log(searchInput);
        if(!searchInput){
            return value
        }
        return value.filter(player => player.team.toLowerCase().startsWith(searchInput.toLowerCase()))
    }

}