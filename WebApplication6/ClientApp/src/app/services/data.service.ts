import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';
import { Cpu} from '../models/cpu'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = "https://localhost:44335";
  constructor(private http: HttpClient) { }

  getComputerSpecs() {
    return this.http.get<Computer[]>(`${this.URL}/api/cpus/all_computer`);
  }
  getCPUs() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_cpu`);
  }
  getMemories() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_memory`);
  }

  getGraphicCards() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_graphicscard`);
  }

  getPowerSupply() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_powersupply`);
  }

  getWeightUnits() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_weightunit`);
  }

  getHDDSizes() {
    return this.http.get<Cpu[]>(`${this.URL}/api/cpus/all_hddsize`);
  }

  getComputerById(id: number) {
    return this.http.get<Computer>(`${this.URL}/api/cpus/computers/${id}`);
  }

  insertComputer(record: Computer) {
    return this.http.post<Computer>(`${this.URL}/api/cpus/computers`, record);
  }
  updateComputer(record: Computer) {
    return this.http.put<Computer>(`${this.URL}/api/cpus/computers/${record.id}`, record);
  }

  deleteComputer(id: number) {
    return this.http.delete(`${this.URL}/api/cpus/computers/${id}`);
  }
}
