import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService implements IMensagem {

  constructor() { }
  sucesso(mensagem: string): void {
    console.log('SUCESSO: ' + mensagem);
  }
  erro(mensagem: string): void {
    console.log('ERRO: ' + mensagem);
  }

  alerta(mensagem: string): void {
    alert(mensagem);
  }

  info(mensagem: string): void {
    console.log('INFO: ' + mensagem);
  }
}
