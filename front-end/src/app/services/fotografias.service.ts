import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http } from '@angular/http';
//Servicio por parte del FrontEnd de obtener la info de Fotografias json
@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  private url: string;

  constructor() {
    this.url=GLOBAL.url;
  }

  getFotografias(){
    return this._http.get(this.url + 'fotografias')
    .toPromise().then(res=>res.json());
  }
}
