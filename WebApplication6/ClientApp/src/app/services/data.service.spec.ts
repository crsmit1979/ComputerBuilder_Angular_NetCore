import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response,  ResponseOptions} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: DataService;
  const URL = 'https://localhost:44335/api/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return observable<Array<Cpu>> when calling getCPUs', () => { 
    var mockData = [
      { id: 1, description: "Cpu 1" },
      { id: 2, description: "Cpu 2" },
    ];

    service.getCPUs().subscribe((response) => {
      console.debug(response);
      console.log(response);
      expect(response.length).toBe(2);
      expect(response[0].id).toEqual(1);
      expect(response[1].id).toEqual(2);
      expect(response[0].description).toEqual("Cpu 1");
      expect(response[1].description).toEqual("Cpu 2");
    });

    const req = httpTestingController.expectOne(`${URL}/all_cpu`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

  it('should return observable<Array<Memory>> when calling getMemory', () => {
    var mockData = [
      { id: 1, description: "Memory 1" },
      { id: 2, description: "Memory 2" },
    ];

    service.getMemories().subscribe((response) => {
      console.debug(response);
      console.log(response);
      expect(response.length).toBe(2);
      expect(response[0].id).toEqual(1);
      expect(response[1].id).toEqual(2);
      expect(response[0].description).toEqual("Memory 1");
      expect(response[1].description).toEqual("Memory 2");
    });

    const req = httpTestingController.expectOne(`${URL}/all_memory`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

  it('should return observable<Array<PowerSupply>> when calling getPowerSupply', () => {
    var mockData = [
      { id: 1, description: "PSU 1" },
      { id: 2, description: "PSU 2" },
    ];

    service.getPowerSupply().subscribe((response) => {
      console.debug(response);
      console.log(response);
      expect(response.length).toBe(2);
      expect(response[0].id).toEqual(1);
      expect(response[1].id).toEqual(2);
      expect(response[0].description).toEqual("PSU 1");
      expect(response[1].description).toEqual("PSU 2");
    });

    const req = httpTestingController.expectOne(`${URL}/all_powersupply`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

  it('should return observable<Array<HDDSize>> when calling getHDDSize', () => {
    var mockData = [
      { id: 1, description: "HDD 1" },
      { id: 2, description: "HDD 2" },
    ];

    service.getHDDSizes().subscribe((response) => {
      console.debug(response);
      console.log(response);
      expect(response.length).toBe(2);
      expect(response[0].id).toEqual(1);
      expect(response[1].id).toEqual(2);
      expect(response[0].description).toEqual("HDD 1");
      expect(response[1].description).toEqual("HDD 2");
    });

    const req = httpTestingController.expectOne(`${URL}/all_hddsize`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

  it('should return observable<Array<WeightUnit>> when calling getWeightUnit', () => {
    // given
    var mockData = [
      { id: 1, description: "lb" },
      { id: 2, description: "kg" },
    ];

    //WHEN
    service.getWeightUnits().subscribe((response) => {
      console.debug(response);
      console.log(response);
      expect(response.length).toBe(2);
      expect(response[0].id).toEqual(1);
      expect(response[1].id).toEqual(2);
      expect(response[0].description).toEqual("lb");
      expect(response[1].description).toEqual("kg");
    });

    const req = httpTestingController.expectOne(`${URL}/all_weightunit`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockData);
  });

});
