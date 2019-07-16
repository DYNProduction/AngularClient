import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgentComponent} from '../agent/agent.component';
import {BranchComponent} from '../branch/branch.component';
import {ContractComponent} from '../contract/contract.component';
import {TariffComponent} from '../tariff/tariff.component';


const routes: Routes = [
  {path: 'db/agents', component: AgentComponent},
  {path: 'db/branchs', component: BranchComponent},
  {path: 'db/contracts', component: ContractComponent},
  {path: 'db/tariffs', component: TariffComponent},
  {path: '**',pathMatch: 'full', redirectTo:'db/contracts'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {
}
