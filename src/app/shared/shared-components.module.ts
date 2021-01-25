import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppHeaderComponent } from './app-header/app-header.component';
import { GenderSelectorComponent } from './gender-selector/gender-selector.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    GenderSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    AppHeaderComponent,
    GenderSelectorComponent
  ]
})

export class SharedComponentsModule { }
