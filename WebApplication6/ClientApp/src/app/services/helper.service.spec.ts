import { TestBed, inject } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperService]
    });
  });

  it('should be created', inject([HelperService], (service: HelperService) => {
    expect(service).toBeTruthy();
  }));

  it("should return false if isNumber is not a number", () => {
    //given
    let helper = new HelperService()
    let value = "richard";

    //when
    let result = helper.isNumber(value)

    //then
    expect(result).toBeFalsy();
  })

  it("should return true if isNumber is  a number", () => {
    //given
    let helper = new HelperService();
    let value = 1

    //when
    let result = helper.isNumber(value);

    //then
    expect(result).toBeTruthy();
  })
});
