import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen.component';
import { DockModule } from 'primeng/dock';

@NgModule({
  declarations: [MainScreenComponent],
  imports: [CommonModule, DockModule],
  exports: [MainScreenComponent],
})
export class MainScreenModule {}
