import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DevengersComponent } from './devengers/devengers.component';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'pagina1', component: TopoComponent },
  { path: 'pagina2', component:  DevengersComponent },


  ];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}