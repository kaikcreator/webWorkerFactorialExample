/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FactorialService } from './factorial.service';

describe('Service: Factorial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactorialService]
    });
  });

  it('should ...', inject([FactorialService], (service: FactorialService) => {
    expect(service).toBeTruthy();
  }));
});
