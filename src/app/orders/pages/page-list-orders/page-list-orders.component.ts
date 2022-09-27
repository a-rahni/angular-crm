import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title: string;
  public route: string;
  public label: string;
  public states: string[];
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public headers!: string[];

  constructor(private ordersService: OrdersService) {
    this.title = 'list of orders';
    this.route = 'add';
    this.label = 'add order';
    this.states = Object.values(StateOrder);
    this.collection$ = this.ordersService.collection$;
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat',
    ];

    // this.ordersService.collection$.subscribe((data) => {
    //   console.log(data);
    //   this.collection = data;
    // });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }
  public changeState(item: Order, event: any) {
    // item contient l'objet Order affiché (ancien)
    // event (change) pour recuperer la nouvelle valeur
    // demander le service change qui retourne un os=bservable contanant l'objet Order modifié coté back-end
    // ensuite modifier l'objet item cote front-end
    //console.log(event.target.value);
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  // deplacer en pipe
  // public total(val: number, coef: number, tva?: number): number {
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }
}
