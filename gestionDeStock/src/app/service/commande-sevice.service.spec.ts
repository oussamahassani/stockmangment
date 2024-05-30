import { TestBed } from '@angular/core/testing';

import { CommandeSeviceService } from './commande-sevice.service';

describe('CommandeSeviceService', () => {
  let service: CommandeSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
