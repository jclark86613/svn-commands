import { Component } from '@angular/core';

import { BranchesService } from '../branches/branches.service';

@Component({
  selector: 'app-commit-to-branch',
  templateUrl: './commit-to-branch.component.html',
  styleUrls: ['./commit-to-branch.component.scss']
})
export class CommitToBranchComponent {
    constructor(
        public branchesService: BranchesService
    ) { }
}
