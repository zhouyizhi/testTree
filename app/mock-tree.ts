import { Tree } from './tree';

export var TREEDATA : Tree[] = [
    { childVisual : true,value : 'BigCategory_1',children : []},
    { childVisual : false,value : 'BigCategory_2',children : [
                                    {childVisual : true,value : 'MiddleCategory_1',children : [
                                                        {childVisual : true,value : 'SmallCategory_1',children : []}
                                                    ]},
                                     {childVisual : true,value : 'MiddleCategory_2',children : [
                                                        {childVisual : true,value : 'SmallCategory_2',children : []},
                                                        {childVisual : true,value : 'SmallCategory_3',children : []}
                                                    ]}
                                    ]}
];