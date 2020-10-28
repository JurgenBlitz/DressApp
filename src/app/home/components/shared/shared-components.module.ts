import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { GenderSelectorComponent } from '../shared';

@NgModule({
  declarations: [
    GenderSelectorComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    GenderSelectorComponent
  ]
})

export class SharedComponentsModule { }
