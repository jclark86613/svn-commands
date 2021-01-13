import { Component } from '@angular/core';

import { BranchesService } from './branches/branches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public branchesService: BranchesService
  ) {

  }
  title = 'svn-commands';
}
