import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropComponent } from './drag-n-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    DragNDropComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    HeaderModule
  ]
})
export class DragNDropModule { }
