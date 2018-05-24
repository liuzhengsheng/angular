import { TestBed, inject } from '@angular/core/testing';

import { ApplicationpannelService } from './applicationpannel.service';

describe('ApplicationpannelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicationpannelService]
    });
  });

  it('should be created', inject([ApplicationpannelService], (service: ApplicationpannelService) => {
    expect(service).toBeTruthy();
  }));
});
