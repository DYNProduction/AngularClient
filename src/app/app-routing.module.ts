import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbdModalOptionsComponent} from './table-components/ngbd-modal-options/ngbd-modal-options.component';

const appRoutes: Routes=[];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
