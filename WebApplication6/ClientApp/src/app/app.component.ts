import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Computer } from './models/computer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  computers: Computer[] = [];
  selectedRecord: Computer;

  constructor(private dataService: DataService) {
    dataService.getComputerSpecs().subscribe( (dt) => {
      this.computers = dt;

    })
  }
  onSubmit() {
    alert(1);
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
