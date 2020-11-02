import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppHeaderComponent, GenderSelectorComponent } from '../shared';

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
