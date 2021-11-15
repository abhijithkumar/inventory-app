import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductLaptopService } from './product-laptop.service';

describe('ProductLaptopService', () => {
  let service: ProductLaptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductLaptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
