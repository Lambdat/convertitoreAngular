import { Injectable } from '@angular/core';
import { Convertitore } from './convertitori/Convertitore';

@Injectable({
  providedIn: 'root'
})
export class ListaCnvService {

  c1 = new Convertitore(4.5461,"galUs","l");
  c2 = new Convertitore(3.7854,"galImp","l");
  c3= new Convertitore(0.00062137,"m","mi");
  c4 = new Convertitore(0.86897624190065,"m","nmi");
  c5 = new Convertitore(1.8000+ 32.00,"C","F");

  lista = [this.c1,this.c2,this.c3,this.c4,this.c5];

  constructor() { }

  convertitori(){
    return this.lista;
  }

  aggiungi(conv:Convertitore):void{
      this.lista.push(conv);
  }


}
