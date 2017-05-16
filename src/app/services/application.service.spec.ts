import { TestBed, inject } from '@angular/core/testing';

import { ApplicationServiceService } from './application.service';

describe('ApplicationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationServiceService]
    });
  });

  it('should ...', inject([ApplicationServiceService], (service: ApplicationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
