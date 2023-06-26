import { TestBed } from '@angular/core/testing';

import { OuiDialogService } from './oui-dialog.service';

describe('OuiDialogService', () => {
  let service: OuiDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OuiDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
