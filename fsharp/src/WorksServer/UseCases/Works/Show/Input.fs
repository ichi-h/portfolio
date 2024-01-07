module WorksServer.UseCases.Works.Show.Input

open WorksServer.Entities.Work

type ShowWork = string -> Result<Work option, string>

type ShowWorkInput = { showWork: ShowWork; slug: string }
