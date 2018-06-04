import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EaCliente } from '../interfaces/ea-cliente';

const URL = '/api/cliente';

@Injectable()
export class EaClienteService {
  constructor(private http: HttpClient) { }

  get(): Observable<EaCliente[]> {
    return this.http.get<EaCliente[]>(URL);
  }

  getById(id: number): Observable<EaCliente> {
    if (id) {
      return this.http.get<EaCliente>(`${URL}/${id}`);
    } else {
      return of({
        id: 0,
        ragioneSociale: '',
        contatto: '',
        indirizzo: '',
        citta: '',
        nazione: '',
        premium: false
      });
    }
  }

  add(item: EaCliente) {
    return this.http.post<EaCliente>(URL, item);
  }

  update(id: number, item: EaCliente) {
    return this.http.put<EaCliente>(`${URL}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete<EaCliente>(`${URL}/${id}`);
  }

  save(item: EaCliente) {
    if (item.id === 0) {
      return this.add(item);
    } else {
      return this.update(item.id, item);
    }
  }
}
