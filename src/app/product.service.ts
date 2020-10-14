import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class ProductService {
  pricate _albumUrl= '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number)
  {
    return this._http.get(this._albumUrl).map((Response)=>
    Response.json());
  }
}
