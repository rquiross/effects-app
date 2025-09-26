import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = 'https://reqres.in/api';
  private header:string = 'reqres-free-v1';

  constructor(private http:HttpClient) { }

  getUsers ():Observable<Usuario[]> {

    return this.http.get<{data: Usuario[]}>(
      `${this.url}/users`,
      { headers: { 'x-api-key': this.header } }

    ).pipe(
      map( (resp) => resp['data'] )
    )
  }

getUserById (id :string):Observable<Usuario> {
    return this.http.get<{data: Usuario}>(
      `${this.url}/users/${ id }`,
      { headers: { 'x-api-key': this.header } }

    ).pipe(
      map( (resp) => resp['data'] )
    )
  }

}
