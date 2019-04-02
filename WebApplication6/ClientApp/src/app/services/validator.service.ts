import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { HelperService } from './helper.service';
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(private helper: HelperService) { }

  isComputerValid(computer: Computer):string[] {
    let errors: string[] = [];
    if (!computer.cpuId)
      errors.push("CPU is required");
    if (!computer.memoryId)
      errors.push("Memory is required");
    if (!computer.graphicsCardId)
      errors.push("Graphics Card is required");
    if (!computer.hddSizeId)
      errors.push("HDD Size is required");
    if (!computer.powerSupplyId)
      errors.push("Power Supply is required");
    if (!computer.weightUnitId)
      errors.push("Weight Unit is required");
    if (!this.helper.isNumber(computer.weight))
      errors.push("Weight is required");
    return errors;

  }
}
