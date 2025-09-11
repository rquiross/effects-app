import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppRoutingModule } from "../../app-routing.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
