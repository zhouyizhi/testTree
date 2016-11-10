import { Component ,OnInit} from '@angular/core';
import { Tree } from './tree';
import { TreeService} from './tree.service';

@Component({
  moduleId: module.id,
  selector: 'my-tree',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css']
})
export class TreeComponent implements OnInit{
  treeData : Tree[];

  constructor (private treeService : TreeService ) {}

  ngOnInit() {
      this.getHeroes();
  }

  getHeroes(): void {
    this.treeService.getTree().then(treeData => this.treeData = treeData);
  }
}