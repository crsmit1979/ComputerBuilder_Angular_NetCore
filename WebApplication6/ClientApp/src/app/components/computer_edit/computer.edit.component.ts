import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '../../models/computer';
import { Cpu } from '../../models/cpu';
import { Graphicscard } from '../../models/graphicscard';
import { Powersupply } from '../../models/powersupply';
import { Weightunit } from '../../models/weightunit';
import { Memory } from '../../models/memory';
import { Hddsize } from '../../models/hddsize';
import { Usb } from '../../models/usb';
import { ComputerUsb } from '../../models/computerusb';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'computer-edit-form',
  templateUrl: './computer.edit.component.html',
})

export class ComputerEditComponent {
  @Input() computer: Computer;
  @Output() onSave = new EventEmitter<Computer>();
  usbItems: ComputerUsb[] = [{ id: 1, usbId: 1, computerId:1, quantity:2 }];

  cpus: Cpu[] = [];
  memories: Memory[] = [];
  graphicscards: Graphicscard[] = [];
  hddsizes: Hddsize[] = [];
  weightunits: Weightunit[] = [];
  powersupplies: Powersupply[] = [];
  usbs: Usb[] = [];

  constructor(private dataService: DataService) {
    this.loadCPUS();
    this.loadGraphicsCards();
    this.loadHDDSizes();
    this.loadMemories();
    this.loadPowerSupplies();
    this.loadUSB();
    this.loadWeightUnits();
  }


  loadUSB() {
    this.dataService.getUSB().subscribe((results) => {
      console.log(results);
      this.usbs = results;
    });
  }

  loadCPUS() {
    this.dataService.getCPUs().subscribe((results) => {
      this.cpus = results;
    });
  }

  loadWeightUnits() {
    this.dataService.getWeightUnits().subscribe((results) => {
      this.weightunits = results;
    });
  }

  loadMemories() {
    this.dataService.getMemories().subscribe((results) => {
      this.memories = results;
    });
  }

  loadPowerSupplies() {
    this.dataService.getPowerSupply().subscribe((results) => {
      this.powersupplies = results;
    });
  }

  loadHDDSizes() {
    this.dataService.getHDDSizes().subscribe((results) => {
      this.hddsizes = results;
    });
  }

  loadGraphicsCards() {
    this.dataService.getGraphicCards().subscribe((results) => {
      this.graphicscards = results;
    });
  }

  addUSBItem() {
    var newComputerUSB = new ComputerUsb();
    newComputerUSB.id = 3;

    newComputerUSB.quantity = 1;
    newComputerUSB.computerId = this.computer.id;
    newComputerUSB.usbId = 1;
    this.usbItems.push(newComputerUSB)
  }

  removeUSBItem(itm) {
    this.usbItems = this.usbItems.filter(e => e.id != itm.id);
  }

  doSave() {
    this.onSave.emit(this.computer);
  }
 }
