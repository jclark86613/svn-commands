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
        this.source = this.replaceSpaceWithUnderscore( value ) || 'trunk';
    }

    public updateBranch ( value ) {
        this.branch = this.replaceSpaceWithUnderscore( value ) || '[branch-name]';
    }

    private replaceSpaceWithUnderscore( value ) {
        return value.replaceAll( ' ', '_' );
    }
}
