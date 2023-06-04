import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor: string): string {
    // 99999-8888
    if (valor.length === 9) {
      return valor.substring(0, 5)
        + '-' + valor.substring(5, 9);
    }
    // (dd) 99999-8888
    else if (valor.length === 11) {
      return '(' + valor.substring(0, 2)
        + ')' + valor.substring(2, 7)
        + '-' + valor.substring(7, 11);
    }
    // (ddd) 99999-8888
    else if (valor.length === 12) {
      return '(' + valor.substring(0, 3)
        + ')' + valor.substring(3, 8)
        + '-' + valor.substring(8, 12);
    }
    return valor;
  }

}

