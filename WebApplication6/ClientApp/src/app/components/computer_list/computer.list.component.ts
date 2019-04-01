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
  loading: boolean = false;

  constructor(private dataService: DataService) {
    this.loadComputers();
  }

  loadComputers() {
    this.loading = true;
    this.dataService.getComputerSpecs().subscribe((dt) => {
      this.computers = dt;
      this.loading = false;
    });

  }

  editRecord(record) {
    this.selectedRecord = record;
  }

  deleteRecord(record) {
    if (confirm("Are you sure you want to delete the record")) {
      this.dataService.deleteComputer(record.id).subscribe((deleted) => {
        if (deleted) {
          this.loadComputers();
        }
        else {
          this.showError("Problem deleting record");
        }
      });
    }
  }

  showError(msg: string) {
    alert(msg);
  }

  selectRecord(record: Computer) {
    this.selectedRecord = record;
  }
}
