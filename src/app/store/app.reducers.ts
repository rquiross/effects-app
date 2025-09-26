import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers'


export interface AppState {
   users:reducers.UsuariosState,
   usuario: reducers.UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
   users:reducers.usuariosReducer,
   usuario: reducers.usuarioReducer
}
