import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Output() public submitted: EventEmitter<Order>; // output pour faire un relation enfant -> parent
  @Input() public init!: Order;
  public states: string[];
  public form!: FormGroup; // on peut pas initialiser FormGroup dans constructor
  // car elle est initialisé avec la propriete init (order) qui est input et crée dans onchages (après constructor)

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Order>(); // flux de type Order
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required], // initialiser le champ formControlName =typePresta avec la var de l'objet order (init)
      client: [
        this.init.client,
        [Validators.required, Validators.minLength(2)],
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.typePresta],
      id: [this.init.id], // formControlname id n'est pas affiché (nest pas liée a l html). gardé pour faire requete vers back-end
    });
  }

  public onSubmit() {
    //console.log(this.form);
    console.log(this.form.value);
    this.submitted.emit(this.form.value); //declencher l'event edasn le quelle envoyer value (Order) a un parent
  }
}
