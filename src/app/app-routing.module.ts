import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ActivProfComponent } from './components/activ-prof/activ-prof.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';
import { StackComponent } from './components/stack/stack.component';

const routes: Routes = [
  { path: 'home'    , component: InfoPersonalComponent },
  { path: 'profesional', component: ActivProfComponent },
  { path: 'actualidad'   , component: ActualidadComponent },
  { path: 'formacion', component: StackComponent },
  { path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
