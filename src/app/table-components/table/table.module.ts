import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import {RouterModule} from '@angular/router';
import {NgbdModalOptionsComponent} from '../ngbd-modal-options/ngbd-modal-options.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    TableRoutingModule
  ],
  entryComponents: [NgbdModalOptionsComponent ]
})
export class TableModule { }
