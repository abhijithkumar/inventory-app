import { Component, OnInit } from '@angular/core';
import { DataSource3Service } from './services/data-source3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dataSource3Table2: any = null;

  constructor(
    private dataSource3Service: DataSource3Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource3Service.getData('Table 2').subscribe(data => this.dataSource3Table2 = data);
  }
}
