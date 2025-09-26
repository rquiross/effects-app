import { inject,Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as  usuarioAction from '../actions';
import { UsuarioService } from '../../services/usuario.service';


@Injectable()
export class UsuarioEffects {

 private actions$ = inject(Actions);
    constructor(
        private usuarioService: UsuarioService
    ) {}

    cargarUsuario$ = createEffect(
       () => this.actions$.pipe(
        ofType(usuarioAction.cargarUsuario),
        mergeMap((action) => this.usuarioService.getUserById(action.id)
            .pipe(
                map(usr => usuarioAction.cargarUsuarioSuccess( {usuario:usr})),
                catchError(error => of(usuarioAction.cargarUsuarioError({ payload :error})))
            )
        )
    ));


}
