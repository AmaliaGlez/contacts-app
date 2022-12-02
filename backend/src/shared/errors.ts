export class CustomError extends Error {
  statusCode: any;
  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export class ValidationError extends CustomError {
  constructor(message: string) {
    super('ValidationError', 400, message);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string) {
    super('NotFoundError', 404, message);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super('UnauthorizedError', 401, message);
  }
}

export class ForbiddenError extends CustomError {
  constructor(message = 'Forbidden') {
    super('ForbiddenError', 403, message);
  }
}
