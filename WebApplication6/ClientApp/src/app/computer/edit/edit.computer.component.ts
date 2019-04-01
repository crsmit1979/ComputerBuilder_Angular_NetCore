import { Component } from '@angular/core';
import { Computer } from '../../models/computer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'edit-computer',
  templateUrl: './edit.computer.component.html',
})

export class EditComputerComponent {
  id: number;
  loading: boolean = false;
  computer: Computer;
  constructor(private route: ActivatedRoute, private dataService:DataService, private router: Router) {
    this.computer = new Computer();

    this.loading = true;
    route.params.subscribe((params) => {
      this.id = params["id"];
      this.dataService.getComputerById(this.id).subscribe((response) => {
        console.log(response);
        this.computer = response;
        this.loading = false;
      })
    });
  }

  onUpdateRecord() {
    this.dataService.updateComputer(this.computer).subscribe((response) => {
      this.router.navigateByUrl("/");
    })
  }
}
