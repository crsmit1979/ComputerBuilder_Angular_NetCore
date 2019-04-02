import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';
import { Cpu} from '../models/cpu'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = "https://localhost:44335/api/data"; //TODO: Need to move into config
  constructor(private http: HttpClient) { }

  getComputerSpecs(search) {
    return this.http.get<Computer[]>(`${this.URL}/computer?search=${search}`);
  }
  getCPUs() {
    return this.http.get<Cpu[]>(`${this.URL}/cpu`);
  }
  getUSB() {
    return this.http.get<Cpu[]>(`${this.URL}/usb`);
  }
  getMemories() {
    return this.http.get<Cpu[]>(`${this.URL}/memory`);
  }

  getGraphicCards() {
    return this.http.get<Cpu[]>(`${this.URL}/graphicscard`);
  }

  getPowerSupply() {
    return this.http.get<Cpu[]>(`${this.URL}/powersupply`);
  }

  getWeightUnits() {
    return this.http.get<Cpu[]>(`${this.URL}/weightunit`);
  }

  getHDDSizes() {
    return this.http.get<Cpu[]>(`${this.URL}/hddsize`);
  }

  getComputerById(id: number) {
    return this.http.get<Computer>(`${this.URL}/computers/${id}`);
  }

  insertComputer(record: Computer) {
    return this.http.post<Computer>(`${this.URL}/computers`, record);
  }

  updateComputer(record: Computer) {
    return this.http.put<Computer>(`${this.URL}/computers/${record.id}`, record);
  }

  deleteComputer(id: number) {
    return this.http.delete(`${this.URL}/computers/${id}`);
  }
}
