/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChronoService } from './chrono.service';

describe('Service: Chrono', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChronoService]
    });
  });

  it('should ...', inject([ChronoService], (service: ChronoService) => {
    expect(service).toBeTruthy();
  }));
});
