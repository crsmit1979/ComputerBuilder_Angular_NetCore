import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { DropDownComponent } from './components/dropdown/app.dropdown';
import { ComputerEditComponent } from './components/computer_edit/computer.edit.component';
import { ComputerListComponent } from './components/computer_list/computer.list.component';
import { AddComputerComponent } from './computer/add/add.computer.component';
import { EditComputerComponent } from './computer/edit/edit.computer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DropDownComponent,
    ComputerEditComponent,
    ComputerListComponent,
    AddComputerComponent,
    EditComputerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'add', component: AddComputerComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: EditComputerComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
