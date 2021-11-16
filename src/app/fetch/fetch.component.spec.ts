import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxActionStripModule, IgxIconModule } from 'igniteui-angular';
import { FetchComponent } from './fetch.component';

describe('FetchComponent', () => {
  let component: FetchComponent;
  let fixture: ComponentFixture<FetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxActionStripModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
