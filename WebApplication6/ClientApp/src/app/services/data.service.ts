import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';
import { Cpu} from '../models/cpu'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = "https://localhost:44335/api/data";
  constructor(private http: HttpClient) { }

  getComputerSpecs() {
    return this.http.get<Computer[]>(`${this.URL}/all_computer`);
  }
  getCPUs() {
    return this.http.get<Cpu[]>(`${this.URL}/all_cpu`);
  }
  getUSB() {
    return this.http.get<Cpu[]>(`${this.URL}/all_usb`);
  }
  getMemories() {
    return this.http.get<Cpu[]>(`${this.URL}/all_memory`);
  }

  getGraphicCards() {
    return this.http.get<Cpu[]>(`${this.URL}/all_graphicscard`);
  }

  getPowerSupply() {
    return this.http.get<Cpu[]>(`${this.URL}/all_powersupply`);
  }

  getWeightUnits() {
    return this.http.get<Cpu[]>(`${this.URL}/all_weightunit`);
  }

  getHDDSizes() {
    return this.http.get<Cpu[]>(`${this.URL}/all_hddsize`);
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
