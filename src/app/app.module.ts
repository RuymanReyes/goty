import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './Components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'


import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { GotyComponent } from './Pages/goty/goty.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
