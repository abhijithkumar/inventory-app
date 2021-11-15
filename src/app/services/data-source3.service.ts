import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource3 } from './data-source3';

@Injectable({
  providedIn: 'root'
})
export class DataSource3Service {
  public getData(tableName: string): Observable<any[]> {
    return of(DataSource3[tableName]);
  }
}
