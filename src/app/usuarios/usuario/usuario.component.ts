import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions';
import { Usuario } from '../../models/usuario';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario
  constructor(private router: ActivatedRoute,
              private store : Store<AppState>
  ){


  }

  ngOnInit(): void {

   this.store.select('usuario').subscribe(( { user, loading, error}) => {
      this.usuario = user;
   })


    this.router.params.subscribe( ({id}) => {
      console.log (id);
      this.store.dispatch(cargarUsuario({id}));
    });
  }


}
