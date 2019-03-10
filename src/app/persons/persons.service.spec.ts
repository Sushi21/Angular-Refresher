/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonsService } from './persons.service';

describe('Service: Persons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonsService]
    });
  });

  it('should ...', inject([PersonsService], (service: PersonsService) => {
    expect(service).toBeTruthy();
  }));
});
