import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitToBranchComponent } from './commit-to-branch/commit-to-branch.component';

const routes: Routes = [
  { path: '', component: CommitToBranchComponent },
  { path: 'svn-commit', component: CommitToBranchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
