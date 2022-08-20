
//export const ServerHost: string = 'I7751-W40204180';  //localhost
export const ServerHost: string = 'localhost';
export const ServerPort: string = '8182';
//К примеру новая структура

export class AdressService {
  public identificationUser = `http://${ServerHost}:${ServerPort}/DataMasking/AutoIdentification`;

}