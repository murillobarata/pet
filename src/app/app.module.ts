import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './_components/card/card.component';
import { AvailablePetsComponent } from './_pages/available-pets/available-pets.component';
import { AdoptedsComponent } from './_pages/adopteds/adopteds.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AvailablePetsComponent,
    AdoptedsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
