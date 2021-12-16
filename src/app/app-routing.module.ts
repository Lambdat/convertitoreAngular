import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertitoriComponent } from './convertitori/convertitori.component';
import { NuovoConvertitoreComponent } from './nuovo-convertitore/nuovo-convertitore.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelezioneComponent } from './selezione/selezione.component';

const routes: Routes = [
  {path:"elenco",component:ConvertitoriComponent},
  {path:"nuovo",component:NuovoConvertitoreComponent},
  {path:"selezione",component:SelezioneComponent},
  {path:"lista",redirectTo:"/elenco",pathMatch:"full"}, //Deve essere sempre l'ultimo quello di non trovato
  {path: "",redirectTo:"/elenco",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
