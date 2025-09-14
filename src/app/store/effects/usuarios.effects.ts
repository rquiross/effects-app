import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from '../actions/usuarios.actions';

import { UsuarioService } from '../../services/usuario.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

   constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
   ) {}

   cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType( cargarUsuarios ),
      tap( data => console.log('effect tap', data) ),
      mergeMap( () => {
         return this.usuarioService.getUsers()
            .pipe(
              tap (data => console.log('data del servicio', data) ),
               map( users => cargarUsuariosSuccess({ usuarios: users }) ),
               catchError( error => of( cargarUsuariosError({ payload: error }) ) )
            );
      })
   ))
}
