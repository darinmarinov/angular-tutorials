/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TutorialService } from './tutorial.service';

describe('TutorialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorialService]
    });
  });

  it('should ...', inject([TutorialService], (service: TutorialService) => {
    expect(service).toBeTruthy();
  }));
});
