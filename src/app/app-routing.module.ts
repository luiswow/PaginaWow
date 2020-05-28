import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { LeveoComponent } from './leveo/leveo.component';
import { AddonsComponent } from './addons/addons.component';
import { TalentosComponent } from './talentos/talentos.component';
import { WarComponent } from './war/war.component';
import { PalaComponent } from './pala/pala.component';


const routes: Routes = [ 
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio',component:ClientesComponent},
  {path:'leveo',component:LeveoComponent},
  {path:'addons',component:AddonsComponent},
  {path:'talentos',component:WarComponent},
  {path:'paladin',component:PalaComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
