module WorksServer.UseCases.Base

type ErrorStatus =
    | BadRequest = 400
    | Unauthorized = 401
    | Forbidden = 403
    | NotFound = 404
    | UnprocessableEntity = 422
    | InternalServerError = 500

type UseCaseError =
    { status: ErrorStatus
      message: string }
