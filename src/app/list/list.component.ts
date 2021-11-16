import { Component, OnInit } from '@angular/core';
import { DataSource3Service } from '../services/data-source3.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public dataSource3Table4: any = null;

  constructor(
    private dataSource3Service: DataSource3Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource3Service.getData('Table 4').subscribe(data => this.dataSource3Table4 = data);
  }
}
