import { NgModule,Pipe }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { TreeService } from './tree.service';
import { AppComponent }  from './app.component';
import { TreeComponent } from './tree.component'; 
import { NodeComponent } from './node.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TreeComponent,
    NodeComponent
  ],
  providers: [ TreeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }