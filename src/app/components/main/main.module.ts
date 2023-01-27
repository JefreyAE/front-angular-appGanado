import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class MainModule { }
