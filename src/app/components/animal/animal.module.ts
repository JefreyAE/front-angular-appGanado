import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AnimalComponent } from './animal.component'; 

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalNavbarComponent } from './animal-navbar/animal-navbar.component';
import { AnimalIndexComponent } from './animal-index/animal-index.component';
import { AnimalAllComponent } from './animal-all/animal-all.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalNavbarComponent,
    AnimalAllComponent, 
    AnimalIndexComponent, 
    AnimalDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AnimalRoutingModule,
    FormsModule
  ],
  providers:[

  ]
})
export class AnimalModule { }
