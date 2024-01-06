module WorksServer.Utils.Error

type ErrorStatus =
    | BadRequest = 400
    | Unauthorized = 401
    | Forbidden = 403
    | NotFound = 404
    | UnprocessableEntity = 422
    | InternalServerError = 500

type Error =
    { status: ErrorStatus
      message: string }
