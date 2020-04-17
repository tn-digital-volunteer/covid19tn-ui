import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EssentialsRoutingModule } from './essentials-routing.module';
import { EssentialsComponent } from './essentials/essentials.component';


@NgModule({
  declarations: [EssentialsComponent],
  imports: [
    CommonModule,
    EssentialsRoutingModule
  ]
})
export class EssentialsModule { }
