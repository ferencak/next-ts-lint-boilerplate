export interface IClient {
  //client data
  id: number
  name: string
  email: string
  auth: IClientAuth
}

export interface IClientAuth {
  accessToken: string
  refreshToken: string
}
