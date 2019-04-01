import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '../../models/computer';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'computer-list',
  templateUrl: './computer.list.component.html',
})

export class ComputerListComponent {
  computers: Computer[];
  selectedRecord: Computer;

  constructor(private dataService: DataService) {
    dataService.getComputerSpecs().subscribe((dt) => {
      this.computers = dt;
    });
  }

  editRecord(record) {
    this.selectedRecord = Object.assign({}, record);
  }
  deleteRecord(record) {
    if (confirm("Are you sure you want to delete the record")) {

    }
  }
  selectRecord(record: Computer) {
    this.selectedRecord = record;
  }
}
