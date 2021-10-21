import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap  } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country[];
  constructor(
    private activeRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorId( params.id)),
        tap( console.log)
      )
      .subscribe( pais => this.pais = pais) //Asignamos a la propiedad pais el valor que llegó de la llamada.
  }



  
}
