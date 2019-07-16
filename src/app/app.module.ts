import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {NavMenuComponent} from './nav-menu/nav-menu.component';

import {RouterModule} from '@angular/router';
import {ContractComponent} from './table-components/contract/contract.component';
import {TariffComponent} from './table-components/tariff/tariff.component';
import {BranchComponent} from './table-components/branch/branch.component';
import {AgentComponent} from './table-components/agent/agent.component';
import {TableModule} from './table-components/table/table.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EntittyRequest} from './model/EntittyRequest';
import {ModalTariffComponent} from './modals/modal-tariff/modal-tariff.component';
import {ModalAgentComponent} from './modals/modal-agent/modal-agent.component';
import {ModalBranchComponent} from './modals/modal-branch/modal-branch.component';
import {ModalContractComponent} from './modals/modal-contract/modal-contract.component';
import {DeleteComponent} from './delete/delete.component';


@NgModule({
  declarations: [
    NavMenuComponent,
    AppComponent,
    ContractComponent,
    TariffComponent,
    BranchComponent,
    AgentComponent,
    ModalTariffComponent,
    ModalAgentComponent,
    ModalBranchComponent,
    ModalContractComponent,
    DeleteComponent
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

  entryComponents: [
    ModalTariffComponent,
    ModalAgentComponent,
    ModalBranchComponent,
    ModalContractComponent,
    DeleteComponent
  ],

  providers: [EntittyRequest],
  bootstrap: [AppComponent, NavMenuComponent]

})
export class AppModule {
}
