import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario';

export const cargarUsuario = createAction('[Usuario] Cargar Usuario por ID',
  props<{ id : string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
props<{ usuario: Usuario }>()
);

export const cargarUsuarioError= createAction(
  '[Usuarios] Cargar Usuario Error',
props<{ payload: any }>()
);
