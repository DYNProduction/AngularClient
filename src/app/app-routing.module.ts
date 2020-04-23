import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgentComponent} from './table-components/agent/agent.component';
import {AppComponent} from './app.component';
import {TariffComponent} from './table-components/tariff/tariff.component';
import {ContractComponent} from './table-components/contract/contract.component';
import {BranchComponent} from './table-components/branch/branch.component';

const appRoutes: Routes = [
  {path: 'db/agents', component: AgentComponent},
  {path: 'db/tariffs', component: TariffComponent},
  {path: 'db/contracts', component: ContractComponent},
  {path: 'db/branchs', component: BranchComponent},
  {path: '**', component: AgentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
