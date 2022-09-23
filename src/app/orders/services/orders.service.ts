import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public collection$: Observable<Order[]>;
  private urlApi: string;
  constructor(private httpclient: HttpClient) {
    this.urlApi = environment.urlApi;
    //this.collection$ = this.httpclient.get<Order[]>(environment.urlApi);
    //this.collection$ = this.httpclient.get<Order[]>(this.urlApi + '/orders');
    this.collection$ = this.httpclient.get<Order[]>(`${this.urlApi}/orders`);

    console.log(this.collection$);

    //this.httpclient.get<Order[]>('http://localhost:3000/orders');
  }
}
