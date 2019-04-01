import { Component } from '@angular/core';
import { Computer } from '../../models/computer';

@Component({
  selector: 'add-computer',
  templateUrl: './add.computer.component.html',
})
export class AddComputerComponent {
  computer: Computer;
  constructor() {
    this.computer = new Computer();
  }

  onAddRecord() {
    alert(JSON.stringify(this.computer));
  }
}
