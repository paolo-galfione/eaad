import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EalShellComponent } from './eal-shell/eal-shell.component';
import { EalNavbarComponent } from './eal-shell/eal-navbar/eal-navbar.component';
import { EalFooterComponent } from './eal-shell/eal-footer/eal-footer.component';
import { EalTextComponent } from './eal-text/eal-text.component';
import { EalSelectComponent } from './eal-select/eal-select.component';
import { EalCheckComponent } from './eal-check/eal-check.component';
import { EalFormCardComponent } from './eal-form-card/eal-form-card.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    EalShellComponent,
    EalNavbarComponent,
    EalFooterComponent,
    EalTextComponent,
    EalSelectComponent,
    EalCheckComponent,
    EalFormCardComponent
  ],
  exports: [
    EalShellComponent,
    EalTextComponent,
    EalSelectComponent,
    EalCheckComponent,
    EalFormCardComponent
  ]
})
export class EalToolboxModule { }
