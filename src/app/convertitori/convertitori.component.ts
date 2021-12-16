import { Component, OnInit } from '@angular/core';
import { Convertitore } from './Convertitore';
import { ListaCnvService } from '../lista-cnv.service';

@Component({
  selector: 'app-convertitori',
  templateUrl: './convertitori.component.html',
  styleUrls: ['./convertitori.component.css']
})
export class ConvertitoriComponent implements OnInit {

  
  convertitori : Convertitore[];

  constructor(private service : ListaCnvService) 
  { 
    this.convertitori=service.convertitori();
  }

  ngOnInit(): void {
  }

  valore =0;

  stile="background-color:orange;";


  /*
    array di numbers

  convertitori = [
                  this.c1.convertire(valore),
                  this.c2.convertire(valore),
                  this.c3.convertire(valore),
                  this.c4.convertire(valore),
                  this.c5.convertire(valore)
                ];

  */



    
      changeColor(event : Event){
        let b =document.querySelector("button");
      
      }          



}
