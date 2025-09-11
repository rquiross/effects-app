import { options } from './../../../node_modules/fast-uri/types/index.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string = 'https://reqres.in/api';
  private header:string = 'reqres-free-v1';

  constructor(private http:HttpClient) { }

  getUsers (){

    return this.http.get(`${this.url}/users`,
      { headers: { 'x-api-key': this.header } }

    ).pipe(
      map( (resp:any) => resp.data )
    )
  }
}
