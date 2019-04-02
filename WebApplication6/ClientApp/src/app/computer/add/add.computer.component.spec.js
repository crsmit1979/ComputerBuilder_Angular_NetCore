"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var data_service_1 = require("../../services/data.service");
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var add_computer_component_1 = require("./add.computer.component");
var computer_1 = require("../../models/computer");
var testing_2 = require("@angular/common/http/testing");
var testing_3 = require("@angular/router/testing");
var rxjs_1 = require("rxjs");
var validator_service_1 = require("../../services/validator.service");
var helper_service_1 = require("../../services/helper.service");
describe("add.computer.component", function () {
    var dataService;
    var router;
    var http;
    var validatorService;
    var helperService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [router_1.RouterModule, testing_2.HttpClientTestingModule, testing_3.RouterTestingModule],
            providers: [data_service_1.DataService]
        });
        dataService = testing_1.TestBed.get(data_service_1.DataService);
        helperService = new helper_service_1.HelperService();
        validatorService = new validator_service_1.ValidatorService(helperService);
    });
    afterEach(function () {
    });
    it("should return true when gotErrors is called and there is errors", function () {
        //given
        var addComputerComponent = new add_computer_component_1.AddComputerComponent(dataService, router, validatorService);
        addComputerComponent.errors.push("error 1");
        //when
        var gotErrors = addComputerComponent.gotErrors();
        //then
        expect(gotErrors).toBeTruthy();
    });
    it("should return false when gotErrors is called and there is no errors", function () {
        //given
        var addComputerComponent = new add_computer_component_1.AddComputerComponent(dataService, router, validatorService);
        //when
        var gotErrors = addComputerComponent.gotErrors();
        //then
        expect(gotErrors).toBeFalsy();
    });
    it("should fail if isValid is run and fields are empty", function () {
        //given
        var messageExists = function (msg) { return addComputerComponent.errors.filter(function (e) { return e == msg; }).length == 1; };
        var computer = new computer_1.Computer();
        computer.cpuId = undefined;
        var addComputerComponent = new add_computer_component_1.AddComputerComponent(dataService, router, validatorService);
        addComputerComponent.computer = computer;
        //when
        var isValid = addComputerComponent.isValid();
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
    });
    it("should  call insertRecord when you press the insert button and there are no errors", function () {
        //given
        var spyInsertComputer = spyOn(dataService, "insertComputer").and.returnValue(new rxjs_1.Observable());
        var addComputerComponent = new add_computer_component_1.AddComputerComponent(dataService, router, validatorService);
        var computer = new computer_1.Computer();
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
});
//# sourceMappingURL=add.computer.component.spec.js.map