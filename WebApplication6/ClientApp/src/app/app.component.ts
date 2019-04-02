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

  constructor(private dataService: DataService) {
  }
  onSaveRecord() {
    alert(1);
  }
 
}
