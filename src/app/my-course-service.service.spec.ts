import { TestBed, inject } from '@angular/core/testing';
import { MyCourseServiceService } from './my-course-service.service';

describe('MyCourseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyCourseServiceService]
    });
  });

  it('should ...', inject([MyCourseServiceService], (service: MyCourseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
