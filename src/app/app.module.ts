import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { ActivProfComponent } from './components/activ-prof/activ-prof.component';
import { ActualidadComponent } from './components/actualidad/actualidad.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StackComponent } from './components/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPersonalComponent,
    ActivProfComponent,
    ActualidadComponent,
    NavbarComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
