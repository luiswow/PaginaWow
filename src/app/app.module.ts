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
import { ArmaswarComponent } from './armaswar/armaswar.component';
import { ProtectwarComponent } from './protectwar/protectwar.component';
import { WarfuryComponent } from './warfury/warfury.component';
import { PalrepComponent } from './palrep/palrep.component';
import { PaltankComponent } from './paltank/paltank.component';
import { PalhealComponent } from './palheal/palheal.component';
import { ClasesComponent } from './clases/clases.component';
import { MagodpsComponent } from './magodps/magodps.component';
import { ChamihealComponent } from './chamiheal/chamiheal.component';
import { ChamidpsComponent } from './chamidps/chamidps.component';
import { SacerdpsComponent } from './sacerdps/sacerdps.component';
import { SacerhealComponent } from './sacerheal/sacerheal.component';
import { LockdpsComponent } from './lockdps/lockdps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    RightPageComponent,
    LeftPageComponent,
    AboutPageComponent,
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
    SacerComponent,
    ArmaswarComponent,
    ProtectwarComponent,
    WarfuryComponent,
    PalrepComponent,
    PaltankComponent,
    PalhealComponent,
    ClasesComponent,
    MagodpsComponent,
    ChamihealComponent,
    ChamidpsComponent,
    SacerdpsComponent,
    SacerhealComponent,
    LockdpsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
