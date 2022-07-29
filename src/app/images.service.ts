import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Images } from './Images';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private ImagesUrl = './images';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  addImages(images: Images): Observable<Images> {
    return this.http.post<Images>(this.ImagesUrl, Images, this.httpOptions);
  }
}
