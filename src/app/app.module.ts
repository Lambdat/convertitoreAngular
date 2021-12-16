import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertitoriComponent } from './convertitori/convertitori.component';
import { SelezioneComponent } from './selezione/selezione.component';
import { NuovoConvertitoreComponent } from './nuovo-convertitore/nuovo-convertitore.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertitoriComponent,
    SelezioneComponent,
    NuovoConvertitoreComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //Aggiunta del Routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
