import { Component ,Input} from '@angular/core';
import { Tree } from './tree';

@Component({
  moduleId: module.id,
  selector: 'my-node',
  templateUrl: 'node.component.html',
  styleUrls: ['tree.component.css']
})
export class NodeComponent {
  @Input()
  treeData : Tree[];

  constructor () {}

}