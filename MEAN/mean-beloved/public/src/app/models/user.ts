export class User {
  constructor(
    public first: string = '',
    public last: string = '',
    public email: string = '',
    public password: string = '',
    public confirm: string = ''
  ) {}
}
