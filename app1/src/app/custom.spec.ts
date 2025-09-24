import { TestBed } from '@angular/core/testing';

import { Custom } from './custom';

describe('Custom', () => {
  let service: Custom;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Custom);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
