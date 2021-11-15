import { Component, OnInit } from '@angular/core';
import { ProductLaptopService } from '../services/product-laptop.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public productLaptopTable1: any = null;

  constructor(
    private productLaptopService: ProductLaptopService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.productLaptopService.getTable1().subscribe(data => this.productLaptopTable1 = data);
  }
}
