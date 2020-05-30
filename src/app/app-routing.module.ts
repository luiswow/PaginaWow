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


const routes: Routes = [ 
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio',component:ClientesComponent},
  {path:'leveo',component:LeveoComponent},
  {path:'addons',component:AddonsComponent},
  {path:'talentos',component:TalentosComponent},
  {path:'paladin',component:PalaComponent},
  {path:'talentos/war',component:WarComponent},
  {path:'talentos/war/dps',component:WarfuryComponent},
  {path:'talentos/war/tanque',component:ProtectwarComponent},
  {path:'talentos/paladin',component:PalaComponent},
  {path:'talentos/paladin/dps',component:PalrepComponent},
  {path:'talentos/paladin/tanque',component:PaltankComponent},
  {path:'talentos/paladin/heal',component:PalhealComponent},
  {path:'talentos/mago',component:MagoComponent},
  {path:'talentos/mago/dps',component:MagodpsComponent},
  {path:'talentos/chaman',component:ChamanComponent},
  {path:'talentos/chaman/heal',component:ChamihealComponent},
  {path:'talentos/chaman/dps',component:ChamidpsComponent},
  {path:'talentos/sacerdote',component:SacerComponent},
  {path:'talentos/sacerdote/dps',component:SacerdpsComponent},
  {path:'talentos/sacerdote/heal',component:SacerhealComponent},
  {path:'talentos/brujo',component:LockComponent},
  {path:'talentos/brujo/dps',component:LockdpsComponent}





  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
