import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // recopier l'order a modifier (pour ne pas impacer l'objet front avant la reponse de back-end)
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.httpclient.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  public add(item: Order): Observable<Order> {
    return this.httpclient.post<Order>(`${this.urlApi}/orders`, item);
  }

  public getOrderById(id: number): Observable<Order> {
    return this.httpclient.get<Order>(`${this.urlApi}/orders/${id}`);
  }


}
