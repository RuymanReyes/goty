import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];

  constructor( private firestore: AngularFirestore) { }

  ngOnInit() {

    this.firestore.collection('goty').valueChanges()
    .pipe(
      map( (resp: Game[]) => {
        return resp.map( ({ name, votos }) => ({ name, value: votos }));
        // OTRA FORMA DE HACERLO
        // return resp.map( juego => {
        //  return {
        //    name: name,
        //    value: juegos.votos
        //  }
        // })
      })
    )
        .subscribe( juegos => {
          console.log(juegos);
          this.juegos = juegos;

        });
  }

}
