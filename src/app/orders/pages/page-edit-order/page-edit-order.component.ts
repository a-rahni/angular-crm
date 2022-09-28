import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public order!: Order;
  public id!: any;

  constructor(
    private orderService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    //this.order = new Order();
    this.activatedRoute.paramMap.subscribe((params) => {
      //console.log(params);
      this.id = params.get('id');
      console.log('id :' + this.id);
    });

    this.orderService.getOrderById(this.id).subscribe((data) => {
      this.order = data;
      console.log(data);
      console.log(this.order);
    });
  }

  ngOnInit(): void {}

  public action(item: Order) {
    this.orderService.update(item).subscribe(() => {
      this.router.navigate(['orders']);
      //this.router.navigate(['orders', 'add']);  // fragements url
    });
  }
}
