import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autorizedGuard } from './autorized.guard';

describe('autorizedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autorizedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
