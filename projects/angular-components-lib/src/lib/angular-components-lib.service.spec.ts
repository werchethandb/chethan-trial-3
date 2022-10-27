import { TestBed } from '@angular/core/testing';

import { AngularComponentsLibService } from './angular-components-lib.service';

describe('AngularComponentsLibService', () => {
  let service: AngularComponentsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularComponentsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
