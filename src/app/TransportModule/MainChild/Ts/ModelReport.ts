import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


export class ModelReport {
  public blok: string | undefined;
  public isrule: string[] | undefined;
  public children: ModelReport[] | undefined;
  public types: string | undefined;
  public pages: string | undefined;
  public model: string | undefined;
}

@Injectable()
export class Report {

  dataChange = new BehaviorSubject<ModelReport[]>([{
    blok: 'Блок маскирования данных',
    children: [
      {
        blok: 'Пользователи',
        children: [{
            blok: undefined,
            children:  undefined,
            types: 'Пользователи системы', pages: './Users', model: 'Пользователи системы', isrule: ['Admin']
        }], types: undefined, pages: undefined, model: undefined, isrule: undefined
      },
      {
        blok: 'Строки соединения',
        children: [{
            blok: undefined,
            children:  undefined,
            types: 'Строки соединения', pages: './ConnectionString', model: 'Строки соединения', isrule: ['Admin','Registrator']
        }], types: undefined, pages: undefined, model: undefined, isrule: undefined
      }
    ], types: undefined, pages: undefined, model: undefined, isrule: undefined
  }]);
}
