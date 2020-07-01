import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficobarraHorizontalComponent implements OnDestroy {
/*  results: any[] = [
   {
     name: 'Juego 1',
     value: 20
   },
   {
     name: 'Juego 2',
     value: 25
   },
   {
     name: 'Juego 3',
     value: 15
   },
   {
     name: 'Juego 4',
     value: 30
   }
 ]; */
 @Input() results: any[] = [];


  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // ESTO ES PARA EL COMIENZO PARA QUE HAGA AUTO LOS DATOS

/*     this.intervalo = setInterval( () => {
      console.log('ticks');

      const newResults = [ ...this.results ];
      // tslint:disable-next-line: forin
      for ( const i in newResults ) {
        newResults[i].value = Math.round( Math.random() * 500 ); // SACA VALORES ENTEROS
      }
      this.results = [... newResults ];
    }, 1500 ); */
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval( this.intervalo );
  }
}
