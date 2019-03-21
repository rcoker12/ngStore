import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesnoBoolean' })
export class YesNoBooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        return value == true ? 'Yes' : 'No'
    };
}