import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOsComponent } from './menu-os.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [MenuOsComponent],
  imports: [CommonModule, MenubarModule],
  exports: [MenuOsComponent],
})
export class MenuOsModule {}
