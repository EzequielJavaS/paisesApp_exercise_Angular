import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorId( params.id))
      )
      .subscribe( pais => {
        console.log(pais);
      })

    
    // this.activeRoute.params
    //   .subscribe( params  => {
    //     console.log(params.id);

    //     this.paisService.getPaisPorId( params.id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       })
    //   })
  }
}
