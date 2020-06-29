import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficobarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficobarraHorizontalComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavbarComponent,
    GraficobarraHorizontalComponent
  ]
})
export class ComponentsModule { }
