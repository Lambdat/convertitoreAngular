import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convertitore } from '../convertitori/Convertitore';
import { ListaCnvService } from '../lista-cnv.service';

@Component({
  selector: 'app-nuovo-convertitore',
  templateUrl: './nuovo-convertitore.component.html',
  styleUrls: ['./nuovo-convertitore.component.css']
})
export class NuovoConvertitoreComponent implements OnInit {

  private service:ListaCnvService;
  private router:Router;

  constructor(service:ListaCnvService , router:Router) { 
    this.service=service;
    this.router=router;
  }

  ngOnInit(): void {
  }
 
  unitaDa="";
  unitaA="";
  coefficiente=0;

  esito="";

  aggiungiConvertitore(evt : any){

    let conv = new Convertitore(this.coefficiente,this.unitaDa,this.unitaA);
   
    this.service.aggiungi(conv);
    this.esito= "Convertitore Inserito!";

    this.router.navigate(["elenco"]); //Con questo metodo dell'oggetto router ci spostiamo sull'elenco
  }

 


  rimuoviEsito(){
    this.esito="";
  }
}
