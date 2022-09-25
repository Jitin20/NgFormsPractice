import { TestBed } from '@angular/core/testing';

import { Myform1serviceService } from './myform1service.service';

describe('Myform1serviceService', () => {
  let service: Myform1serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myform1serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
