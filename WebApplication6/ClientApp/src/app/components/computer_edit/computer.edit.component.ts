import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '../../models/computer';
import { Cpu } from '../../models/cpu';
import { Graphicscard } from '../../models/graphicscard';
import { Powersupply } from '../../models/powersupply';
import { Weightunit } from '../../models/weightunit';
import { Memory } from '../../models/memory';
import { Hddsize } from '../../models/hddsize';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'computer-edit-form',
  templateUrl: './computer.edit.component.html',
})

export class ComputerEditComponent {
  @Input() computer: Computer;
  @Output() onSave = new EventEmitter<Computer>();

  cpus: Cpu[] = [];
  memories: Memory[] = [];
  graphicscards: Graphicscard[] = [];
  hddsizes: Hddsize[] = [];
  weightunits: Weightunit[] = [];
  powersupplies: Powersupply[] = [];

  constructor(private dataService: DataService) {
    dataService.getCPUs().subscribe((results) => {
      this.cpus = results;
    });
    dataService.getWeightUnits().subscribe((results) => {
      this.weightunits = results;
    });
    dataService.getMemories().subscribe((results) => {
      this.memories = results;
    });
    dataService.getPowerSupply().subscribe((results) => {
      this.powersupplies = results;
    });
    dataService.getGraphicCards().subscribe((results) => {
      this.graphicscards = results;
    });
    dataService.getHDDSizes().subscribe((results) => {
      this.hddsizes = results;
    });
  }

  doSave() {
    this.onSave.emit(this.computer);
  }
 }
