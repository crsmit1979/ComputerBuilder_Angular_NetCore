import { Component } from '@angular/core';
import { Computer } from '../../models/computer';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'add-computer',
  templateUrl: './add.computer.component.html',
})
export class AddComputerComponent {
  computer: Computer;
  constructor(private dataService: DataService, private router: Router ) {
    this.computer = new Computer();
  }

  onAddRecord() {
    this.dataService.insertComputer(this.computer).subscribe((response) => {
      this.router.navigateByUrl("/");
    });
  }
}
