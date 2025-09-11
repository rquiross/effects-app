import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-lista',
  standalone: false,
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

    users: Usuario[] = [];
  constructor(private usuarios: UsuarioService) { }

  ngOnInit(): void {
    // this.usuarios.getUsers().subscribe(resp=>{
    //   console.log(resp);
    this.usuarios.getUsers().subscribe
    (resp => {
      console.log(resp)
      this.users = resp;
    });
  }
}
