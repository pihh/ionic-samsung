import { TestBed } from '@angular/core/testing';

import { OuiModalService } from './oui-modal.service';

describe('OuiModalService', () => {
  let service: OuiModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OuiModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
