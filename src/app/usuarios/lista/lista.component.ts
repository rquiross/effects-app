import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor( private store :Store<AppState>) { }

  ngOnInit(): void {




    this.store.dispatch( cargarUsuarios() );

      this.store.select('users').subscribe( ({users, loading , error}) => {
    //  console.log('usuarios subs', usuarios);
      this.usuarios = users;
      this.loading = loading;
      this.error = error;

   });


    // this.usuarios.getUsers().subscribe(resp=>{
    //   console.log(resp);
    // this.usuarios.getUsers().subscribe
    // (resp => {
    //   console.log(resp)
    //   this.users = resp;
    // });
  }
}
