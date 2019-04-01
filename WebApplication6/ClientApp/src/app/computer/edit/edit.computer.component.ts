import { Component } from '@angular/core';
import { Computer } from '../../models/computer';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'edit-computer',
  templateUrl: './edit.computer.component.html',
})

export class EditComputerComponent {
  id: number;
  loading: boolean = false;
  computer: Computer;
  constructor(private route: ActivatedRoute, private dataService:DataService) {
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
    alert(JSON.stringify(this.computer));
  }
}
