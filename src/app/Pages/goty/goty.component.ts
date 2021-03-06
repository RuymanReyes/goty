import { Component, OnInit } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Game } from 'src/app/Interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];

  constructor( private GameService: GameService ) { }

  ngOnInit() {

    this.GameService.getNominados()
      .subscribe( resp => {
        //console.log( resp );
        this.juegos = resp;

      });
  }

  votarJuego( juego: Game ) {
    this.GameService.votarJuegos( juego.id )
      .subscribe( (resp: { ok: boolean, mensaje: string }) => {
        if (resp.ok ){
          Swal.fire( 'Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Oops', resp.mensaje, 'error')
        }

      });
  }

}
