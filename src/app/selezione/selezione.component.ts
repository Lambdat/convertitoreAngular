import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Convertitore } from '../convertitori/Convertitore';
import { ListaCnvService } from '../lista-cnv.service';

@Component({
  selector: 'app-selezione',
  templateUrl: './selezione.component.html',
  styleUrls: ['./selezione.component.css']
})
export class SelezioneComponent implements OnInit {

  convertitori : Convertitore[];

  constructor(private service : ListaCnvService) { 
    this.convertitori=service.convertitori();
  }

  ngOnInit(): void {
  }

  risultato = "";
  unitaMisuraDa ="";  
  unitaMisuraA="";
  convertitoreDaCaricare = 0;

  eventoSelect(evento:any){
    
    this.unitaMisuraDa = this.convertitori[evento.target.value].convertiDa;
    this.unitaMisuraA = this.convertitori[evento.target.value].convertiA;
    this.convertitoreDaCaricare= parseInt(evento.target.value);

    let calcolo = this.convertitori[this.convertitoreDaCaricare].convertire(this.valoreUtente);

    this.risultato=`Da ${this.unitaMisuraDa} a ${this.unitaMisuraA} = ${calcolo}`;
  }

  valoreUtente=0;

  inserisciValore(event:any){
    this.valoreUtente=parseFloat(event.target.value);

    console.log(this.valoreUtente);

    let calcolo = this.convertitori[this.convertitoreDaCaricare].convertire(this.valoreUtente);

    this.risultato=`Da ${this.unitaMisuraDa} a ${this.unitaMisuraA} = ${calcolo}`;


  }

 
  


  








}


