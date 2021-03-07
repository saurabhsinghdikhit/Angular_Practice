import { Pipe, PipeTransform } from '@angular/core';  
@Pipe({name: 'Addpipe'}) 

export class AdditionalPipe implements PipeTransform { 
    transform(value: number, additional: string): number { 
        let add = parseFloat(additional); 
        return value + add 
     } 
} 