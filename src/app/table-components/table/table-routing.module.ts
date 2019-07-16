import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgentComponent} from '../agent/agent.component';
import {BranchComponent} from '../branch/branch.component';
import {ContractComponent} from '../contract/contract.component';
import {TariffComponent} from '../tariff/tariff.component';


const routes: Routes = [
  {path: 'agents', component: AgentComponent},
  {path: 'branchs', component: BranchComponent},
  {path: 'contracts', component: ContractComponent},
  {path: 'tariffs', component: TariffComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {
}
