import { Component, OnInit } from '@angular/core';
import { ProductLaptopService } from '../services/product-laptop.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public productLaptopTable1: any = null;
  public northwindCategories: any = null;

  constructor(
    private productLaptopService: ProductLaptopService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.productLaptopService.getTable1().subscribe(data => this.productLaptopTable1 = data);
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
  }
}
