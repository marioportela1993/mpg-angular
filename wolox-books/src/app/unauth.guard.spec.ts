import { TestBed, async, inject } from '@angular/core/testing';

import { UnauthGuard } from './unauth.guard';

describe('UnauthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthGuard]
    });
  });

  it('should ...', inject([UnauthGuard], (guard: UnauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
