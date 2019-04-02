import { Component } from '@angular/core';
import { Computer } from '../../models/computer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'edit-computer',
  templateUrl: './edit.computer.component.html',
})

export class EditComputerComponent {
  id: number;
  loading: boolean = false;
  computer: Computer;
  errors: string[] = []

  constructor(private route: ActivatedRoute, private dataService:DataService, private router: Router, private validatorService: ValidatorService) {
    this.computer = new Computer();

    this.loading = true;

    //fetch the parameters from the ulr
    route.params.subscribe((params) => {
      this.id = params["id"];
      this.loadComputerById(this.id);
    });
  }

  loadComputerById(id: number) {
    this.dataService.getComputerById(this.id).subscribe((response) => {
      this.computer = response;
      this.loading = false;
    })
  }

  isValid() {
    this.errors = this.validatorService.isComputerValid(this.computer);
    return this.errors.length == 0;
  }

  gotErrors():boolean {
    return this.errors.length > 0;
  }

  onUpdateRecord() {
    if (!this.isValid())
      return;

    this.updateComputerRecord();
  }

  updateComputerRecord() {
    this.dataService.updateComputer(this.computer).subscribe((response) => {
      this.router.navigateByUrl("/");
    })
  }
}
