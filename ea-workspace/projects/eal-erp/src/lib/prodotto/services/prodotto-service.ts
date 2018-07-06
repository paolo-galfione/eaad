import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Prodotto } from '../interfaces/prodotto';

const URL = '/api/prodotto';

@Injectable()
export class ProdottoService {
  constructor(private http: HttpClient) { }

  get(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(URL);
  }

  getById(id: number): Observable<Prodotto> {
    if (id) {
      return this.http.get<Prodotto>(`${URL}/${id}`);
    } else {
      return of({
                id: 0,
                descrizione: '',
                tipologia: '',
                prezzo: '',
                disponibile: false,
                fornitore: ''

      });
    }
  }

  add(item: Prodotto) {
    return this.http.post<Prodotto>(URL, item);
  }

  update(id: number, item: Prodotto) {
    return this.http.put<Prodotto>(`${URL}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete<Prodotto>(`${URL}/${id}`);
  }

  save(item: Prodotto) {
    if (item.id === 0) {
      return this.add(item);
    } else {
      return this.update(item.id, item);
    }
  }
}
