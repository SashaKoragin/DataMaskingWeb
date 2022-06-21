export class UserDtoLoginAndPassword {
  public idUser: number = 0;
  public nameUser: string | undefined;
  public personnelNumber: string | undefined;
  public loginUser: string | undefined;
  public passwordsUser: string | undefined;
  public isError: boolean = false;
  public errorMessage: string | undefined;
  public groupRuleServer: string[] = [];
}
