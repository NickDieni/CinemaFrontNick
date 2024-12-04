import { TestBed } from '@angular/core/testing';

import { PostalcodeService } from './postalcode.service';

describe('PostalcodeService', () => {
  let service: PostalcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
