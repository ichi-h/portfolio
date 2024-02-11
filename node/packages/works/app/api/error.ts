export class APIError<T = any> extends Error {
  responseBody: T;
  status: number;

  constructor(message: string, responseBody: T, status: number) {
    super(message);
    this.responseBody = responseBody;
    this.status = status;
  }
}
