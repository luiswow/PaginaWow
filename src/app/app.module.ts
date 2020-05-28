import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { LeveoComponent } from './leveo/leveo.component';
import { AddonsComponent } from './addons/addons.component';
import { TalentosComponent } from './talentos/talentos.component';
import { WarComponent } from './war/war.component';
import { PalaComponent } from './pala/pala.component';
import { ChamanComponent } from './chaman/chaman.component';
import { LockComponent } from './lock/lock.component';
import { MagoComponent } from './mago/mago.component';
import { SacerComponent } from './sacer/sacer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    LeveoComponent,
    AddonsComponent,
    TalentosComponent,
    WarComponent,
    PalaComponent,
    ChamanComponent,
    LockComponent,
    MagoComponent,
    SacerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
