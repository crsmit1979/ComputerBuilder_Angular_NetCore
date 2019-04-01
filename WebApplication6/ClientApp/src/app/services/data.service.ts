import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../models/computer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComputerSpecs() {
    return this.http.get<Computer[]>("https://localhost:44335/api/cpus");
  }
}
