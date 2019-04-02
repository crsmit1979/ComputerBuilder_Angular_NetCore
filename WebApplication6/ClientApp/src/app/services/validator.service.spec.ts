import { TestBed, inject } from '@angular/core/testing';
import { HelperService } from './helper.service';
import { ValidatorService } from './validator.service';
import { Computer } from '../models/computer';

describe('ValidatorService', () => {
  let helperService: HelperService;
  let validatorService: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
    helperService = new HelperService();
    validatorService = new ValidatorService(helperService)
  });

  it('should be created', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));

  it("should fail if isValid is run and fields are empty", () => {
  let errors: string[] = [];
  const messageExists = (msg) => errors.filter(e => e == msg).length == 1;
  let computer = new Computer();

  //when
  errors = validatorService.isComputerValid(computer);

  //then
  expect(errors.length).toBe(7);
  expect(messageExists("CPU is required")).toBeTruthy();
  expect(messageExists("Power Supply is required")).toBeTruthy();
  expect(messageExists("Memory is required")).toBeTruthy();
  expect(messageExists("HDD Size is required")).toBeTruthy();
  expect(messageExists("Weight Unit is required")).toBeTruthy();
  expect(messageExists("Weight is required")).toBeTruthy();
  expect(messageExists("Graphics Card is required")).toBeTruthy();
})
});
