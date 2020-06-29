import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './Components/components.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { GotyComponent } from './Pages/goty/goty.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
