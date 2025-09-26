import { createReducer, on } from '@ngrx/store';
import { cargarUsuario,cargarUsuarioError,cargarUsuarioSuccess } from '../actions';
import { Usuario } from '../../models/usuario';

export interface UsuarioState {
    id :string,
    user: Usuario,
    loaded:boolean,
    loading:boolean,
    error:any
}

export const usersInitialState: UsuarioState = {
    id : '',
    user: {} as Usuario,
    loaded:false,
    loading:false,
    error:null
}

const _UsuarioReducer = createReducer(
   usersInitialState,

    on(cargarUsuario, (state, { id }) => ({
      ...state,
      loading: true,
      id: id
    })),

    on(cargarUsuarioSuccess, (state, { usuario }) => ({
        ...state,
        loading: false,
        loaded: true,
        user:  {...usuario}
    })),

    on(cargarUsuarioError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
          url : payload.url,
          name: payload.name,
          message: payload.message
        }
    }))

);

export function usuarioReducer(state: UsuarioState | undefined, action: any) {
    return _UsuarioReducer(state, action);
}
