import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptedsComponent } from './_pages/adopteds/adopteds.component';
import { AvailablePetsComponent } from './_pages/available-pets/available-pets.component';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/availablepets', pathMatch: 'full' },
  { path: 'availablepets', component: AvailablePetsComponent },
  { path: 'adopteds', component: AdoptedsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
