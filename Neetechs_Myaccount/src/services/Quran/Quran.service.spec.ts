/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuranService } from './Quran.service';

describe('Service: QuranApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuranService]
    });
  });

  it('should ...', inject([QuranService], (service: QuranService) => {
    expect(service).toBeTruthy();
  }));
});
