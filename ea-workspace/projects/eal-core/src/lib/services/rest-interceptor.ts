import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RestInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // verifico se l'url è del tipo .../api/(risorsa)
    let match = request.url.match(/.*\/api\/([\w-]+)$/);
    if (match) {
      const risorsa = match[1];
      const items = this.getDb(risorsa) || [];

      if ( request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: items }));
      }

      if ( request.method === 'POST') {
        const item = request.body;
        // imposto il nuovo id al max id + 1 della collezione
        item.id = items.reduce((max, current) => (max > current.id) ? max : current.id, 0) + 1;
        items.push(item);
        this.setDb(risorsa, items);
        return of(new HttpResponse({ status: 200 }));
      }
    }

    // verifico se l'url è del tipo .../api/(risorsa)/(id)
    match = request.url.match(/.*\/api\/([\w-]+)\/(\d+)$/);
    if (match) {
      const risorsa = match[1];
      const id = +match[2];
      let items = this.getDb(risorsa) || [];

      if ( request.method === 'GET') {
        const item = items.find(i => i.id === id);
        return of(new HttpResponse({ status: 200, body: item }));
      }

      if ( request.method === 'PUT') {
        const item = request.body;
        items = [
          ...items.filter(i => i.id < item.id),
          item,
          ...items.filter(i => i.id > item.id),
        ];
        this.setDb(risorsa, items);
        return of(new HttpResponse({ status: 200 }));
      }

      if ( request.method === 'DELETE') {
        items = items.filter(item => item.id !== id);
        this.setDb(risorsa, items);
        return of(new HttpResponse({ status: 200 }));
      }

    }
    return of(new HttpResponse({ status: 500 }));
  }

  private getDb(key: string): any[] {
    const items = JSON.parse(localStorage.getItem(key));
    return items;
  }

  private setDb(key: string, items: any[]) {
    localStorage.setItem(key, JSON.stringify(items));
  }

}

