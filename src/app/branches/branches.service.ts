import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  constructor() { }

  public root = 'svn://svn/software/server/';
  public source = 'trunk';
  public branch = '[branch-name]';

  public updateSource ( value ) {
    this.source = value.replaceAll( ' ', '_' ) || '[source-name]';
  }

  public updateBranch ( value ) {
    this.branch = value.replaceAll( ' ', '_' ) || '[branch-name]';
  }
}
