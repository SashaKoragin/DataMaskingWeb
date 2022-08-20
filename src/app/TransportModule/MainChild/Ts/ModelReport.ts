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
            blok: null,
            children:  null,
            types: 'Пользователи системы', pages: './Users', model: 'Пользователи системы', isrule: ['Admin']
        }], types: null, pages: null, model: null, isrule: null
      },
      {
        blok: 'Строки соединения',
        children: [{
            blok: null,
            children:  null,
            types: 'Строки соединения', pages: './ConnectionString', model: 'Строки соединения', isrule: ['Admin','Registrator']
        }], types: null, pages: null, model: null, isrule: null
      }
    ], types: null, pages: null, model: null, isrule: null
  }]);
}
