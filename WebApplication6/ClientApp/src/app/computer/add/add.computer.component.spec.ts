import { DataService } from '../../services/data.service';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router'
import { AddComputerComponent } from './add.computer.component';
import { Computer } from '../../models/computer';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { ValidatorService } from '../../services/validator.service';
import { HelperService } from '../../services/helper.service';

describe("add.computer.component", () => {
  let dataService: DataService;
  let router: Router;
  let http: HttpTestingController;
  let validatorService: ValidatorService;
  let helperService: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DataService]
    });
    dataService = TestBed.get(DataService);
    helperService = new HelperService();
    validatorService = new ValidatorService(helperService)
  });

    afterEach(() => {
    });

  it("should return true when gotErrors is called and there is errors", () => {
    //given
    let addComputerComponent = new AddComputerComponent(dataService, router, validatorService);
    addComputerComponent.errors.push("error 1");

    //when
    let gotErrors = addComputerComponent.gotErrors();

    //then
    expect(gotErrors).toBeTruthy();
  })

  it("should return false when gotErrors is called and there is no errors", () => {
    //given
    let addComputerComponent = new AddComputerComponent(dataService, router, validatorService)

    //when
    let gotErrors = addComputerComponent.gotErrors();

    //then
    expect(gotErrors).toBeFalsy();
  })


    it("should fail if isValid is run and fields are empty", () => {
      //given
      const messageExists = (msg) => addComputerComponent.errors.filter(e => e == msg).length == 1;
      let computer = new Computer();
      computer.cpuId = undefined;

      let addComputerComponent = new AddComputerComponent(dataService, router, validatorService)
      addComputerComponent.computer = computer;

      //when
      let isValid = addComputerComponent.isValid();

      //then
      expect(isValid).toBeFalsy();
      expect(addComputerComponent.errors.length).toBe(7);
      expect(messageExists("CPU is required")).toBeTruthy();
      expect(messageExists("Power Supply is required")).toBeTruthy();
      expect(messageExists("Memory is required")).toBeTruthy();
      expect(messageExists("HDD Size is required")).toBeTruthy();
      expect(messageExists("Weight Unit is required")).toBeTruthy();
      expect(messageExists("Weight is required")).toBeTruthy();
      expect(messageExists("Graphics Card is required")).toBeTruthy();
  })

  it("should  call insertRecord when you press the insert button and there are no errors", () => {
    //given
    let spyInsertComputer = spyOn(dataService, "insertComputer").and.returnValue(new Observable<Computer>());
    let addComputerComponent = new AddComputerComponent(dataService, router, validatorService);
    let computer = new Computer();
    computer.cpuId = 1;
    computer.graphicsCardId = 1;
    computer.hddSizeId = 1;
    computer.memoryId = 1;
    computer.powerSupplyId = 1;
    computer.weight = 200;
    computer.weightUnitId = 1;
    addComputerComponent.computer = computer;

    //when
    addComputerComponent.onAddRecord();

    //then
    expect(spyInsertComputer).toHaveBeenCalled();
  });

})
