import { Injectable } from '@angular/core';

import { Tree } from './tree';
import { TREEDATA } from './mock-tree';

@Injectable()
export class TreeService {
	
	getTree(): Promise<Tree[]> {
    return Promise.resolve(TREEDATA);
  }
  
}