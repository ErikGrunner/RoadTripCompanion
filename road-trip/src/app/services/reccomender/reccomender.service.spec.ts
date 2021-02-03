import { TestBed } from '@angular/core/testing';

import { ReccomenderService } from './reccomender.service';

describe('ReccomenderService', () => {
  let service: ReccomenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReccomenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
