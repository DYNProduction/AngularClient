import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

import {RouterModule} from '@angular/router';
import { ContractComponent } from './table-components/contract/contract.component';
import { TariffComponent } from './table-components/tariff/tariff.component';
import { BranchComponent } from './table-components/branch/branch.component';
import { AgentComponent } from './table-components/agent/agent.component';
import {TableModule} from './table-components/table/table.module';
import { UserDatabaseComponent } from './table-components/user-database/user-database.component';
import { NgbdModalOptionsComponent } from './table-components/ngbd-modal-options/ngbd-modal-options.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalUserComponent } from './table-components/user-database/modal-user/modal-user.component';


@NgModule({
  declarations: [
    NavMenuComponent,
    AppComponent,
    ContractComponent,
    TariffComponent,
    BranchComponent,
    AgentComponent,
    UserDatabaseComponent,
    NgbdModalOptionsComponent,
    ModalUserComponent
  ],


  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],

  entryComponents: [NgbdModalOptionsComponent, UserDatabaseComponent, ModalUserComponent],

  providers: [],
  bootstrap: [AppComponent, NavMenuComponent, UserDatabaseComponent,NgbdModalOptionsComponent]

})
export class AppModule {
}
