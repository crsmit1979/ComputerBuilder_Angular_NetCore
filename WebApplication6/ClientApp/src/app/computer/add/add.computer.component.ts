import { Component } from '@angular/core';
import { Computer } from '../../models/computer';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'add-computer',
  templateUrl: './add.computer.component.html'
})

export class AddComputerComponent {
  computer: Computer;
  errors: string[] = [];

  constructor(private dataService: DataService, private router: Router, private validatorService: ValidatorService ) {
    this.computer = new Computer();
  }

  isValid() {
    this.errors = this.validatorService.isComputerValid(this.computer);
    return this.errors.length == 0;
  }

  gotErrors():boolean {
    return this.errors.length > 0;
  }

  onAddRecord() {
    if (!this.isValid())
      return;

    this.insertRecord();
  }

  insertRecord() {
    this.dataService.insertComputer(this.computer).subscribe((response) => {
      this.router.navigateByUrl("/");
      window.scroll(0, 0);
    });
  }
}
