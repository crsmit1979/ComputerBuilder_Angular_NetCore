import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Computer } from '../../models/computer';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'computer-list',
  templateUrl: './list.computer.component.html',
})

export class ListComputerComponent {
  computers: Computer[];
  selectedRecord: Computer;
  loading: boolean = false;

  constructor(private dataService: DataService) {
    this.loadComputers();
  }

  loadComputers() {
    this.loading = true;
    this.dataService.getComputerSpecs().subscribe((response) => {
      this.computers = response;
      this.loading = false;
    },
      (error) => this.logError(error)
    );

  }

  editRecord(record) {
    this.selectedRecord = record;
  }

  deleteRecord(record) {
    if (confirm("Are you sure you want to delete the record")) {
      this.dataService.deleteComputer(record.id).subscribe((deleted) => {
        if (deleted) {
          window.scroll(0, 0);
          this.loadComputers();
        }
        else {
          this.logError("Problem deleting record");
        }
      });
    }
  }

  logError(msg: string) {
    ///call a loggin service to show the error to the user
  }

  selectRecord(record: Computer) {
    this.selectedRecord = record;

  }
}
