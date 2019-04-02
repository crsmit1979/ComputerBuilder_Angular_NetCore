import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ComputerEditComponent } from './components/computer_edit/computer.edit.component';
import { ListComputerComponent } from './computer/list/list.computer.component';
import { AddComputerComponent } from './computer/add/add.computer.component';
import { EditComputerComponent } from './computer/edit/edit.computer.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ComputerEditComponent,
    ListComputerComponent,
    AddComputerComponent,
    EditComputerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'list', component: HomeComponent, pathMatch: 'full' },
      { path: 'add', component: AddComputerComponent, pathMatch: 'full' },
      { path: 'edit/:id', component: EditComputerComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
