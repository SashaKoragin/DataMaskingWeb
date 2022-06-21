import { Component } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ModelReport, Report } from '../Ts/ModelReport';
import { AuthIdentification } from 'src/ApiJava/RequestService/RequestService';

@Component({

  templateUrl: '../Html/MainChild.html',
  styleUrls: ['../Css/MainChild.css'],
  providers:[Report],

})
export class MainChildBlok{

  constructor(database: Report, public authService: AuthIdentification) {
     this.welcome = 'Добро пожаловать: ' + authService.user.nameUser;
     this.rules = authService.user.groupRuleServer;
     this.selected = this.rules[0];
    this.nestedTreeControl = new NestedTreeControl<ModelReport>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
}

welcome:string | undefined;
rules:string[] = [];
selected:string = this.rules[0];
nestedTreeControl: NestedTreeControl<ModelReport>;
nestedDataSource: MatTreeNestedDataSource<ModelReport>;

  hasNestedChild = (_: number, nodeData: ModelReport) => !nodeData.types;
  private _getChildren = (node: ModelReport) => node.children;

}
