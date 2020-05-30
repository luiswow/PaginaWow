import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { LeveoComponent } from './leveo/leveo.component';
import { AddonsComponent } from './addons/addons.component';
import { TalentosComponent } from './talentos/talentos.component';
import { WarComponent } from './war/war.component';
import { PalaComponent } from './pala/pala.component';
import { WarfuryComponent } from './warfury/warfury.component';
import { componentFactoryName } from '@angular/compiler';
import { ProtectwarComponent } from './protectwar/protectwar.component';
import { PalrepComponent } from './palrep/palrep.component';
import { PaltankComponent } from './paltank/paltank.component';
import { PalhealComponent } from './palheal/palheal.component';
import { MagoComponent } from './mago/mago.component';
import { MagodpsComponent } from './magodps/magodps.component';
import { ChamanComponent } from './chaman/chaman.component';
import { ChamihealComponent } from './chamiheal/chamiheal.component';
import { ChamidpsComponent } from './chamidps/chamidps.component';
import { SacerComponent } from './sacer/sacer.component';
import { SacerdpsComponent } from './sacerdps/sacerdps.component';
import { SacerhealComponent } from './sacerheal/sacerheal.component';
import { LockComponent } from './lock/lock.component';
import { LockdpsComponent } from './lockdps/lockdps.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [ 
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio',component:ClientesComponent},
  {path:'leveo',component:LeveoComponent},
  {path:'addons',component:AddonsComponent},
  {path:'talentos',component:TalentosComponent},
  {path:'paladin',component:PalaComponent},
  {path:'talentos/war',component:WarComponent ,data: { animation: 'isRight' } },
  {path:'talentos/war/dps',component:WarfuryComponent,data: { animation: 'isLeft' } },
  {path:'talentos/war/tanque',component:ProtectwarComponent,data: { animation: 'isRight' } },
  {path:'talentos/paladin',component:PalaComponent,data: { animation: 'isLeft' } },
  {path:'talentos/paladin/dps',component:PalrepComponent,data: { animation: 'isRight' } },
  {path:'talentos/paladin/tanque',component:PaltankComponent,data: { animation: 'isLeft' } },
  {path:'talentos/paladin/heal',component:PalhealComponent,data: { animation: 'isRight' } },
  {path:'talentos/mago',component:MagoComponent,data: { animation: 'isLeft' } },
  {path:'talentos/mago/dps',component:MagodpsComponent ,data: { animation: 'isRight' } },
  {path:'talentos/chaman',component:ChamanComponent ,data: { animation: 'isLeft' } },
  {path:'talentos/chaman/heal',component:ChamihealComponent ,data: { animation: 'isLeft' } },
  {path:'talentos/chaman/dps',component:ChamidpsComponent ,data: { animation: 'isRight' } },
  {path:'talentos/sacerdote',component:SacerComponent ,data: { animation: 'isRight' } },
  {path:'talentos/sacerdote/dps',component:SacerdpsComponent ,data: { animation: 'isLeft' } },
  {path:'talentos/sacerdote/heal',component:SacerhealComponent ,data: { animation: 'isRight' } },
  {path:'talentos/brujo',component:LockComponent ,data: { animation: 'isLeft' } },
  {path:'talentos/brujo/dps',component:LockdpsComponent ,data: { animation: 'isRight' } },





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
