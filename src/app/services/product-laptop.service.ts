import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductLaptopService {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`http://abhijithkumar.com/store/api/laptop.php`);
  }
}
