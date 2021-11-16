import { Component, OnInit } from '@angular/core';
import { ProductLaptopService } from '../services/product-laptop.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss']
})
export class FetchComponent implements OnInit {
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
