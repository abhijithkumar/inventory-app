import { TestBed } from '@angular/core/testing';

import { DataSource3Service } from './data-source3.service';

describe('DataSource3Service', () => {
  let service: DataSource3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
