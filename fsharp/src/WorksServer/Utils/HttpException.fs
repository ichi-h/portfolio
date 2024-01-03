module WorksServer.Utils.HttpException

type StatusCode =
    | BadRequest = 400
    | Unauthorized = 401
    | Forbidden = 403
    | NotFound = 404
    | UnprocessableEntity = 422
    | InternalServerError = 500

type HttpException = { status: StatusCode; message: string }
