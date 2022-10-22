import { ReactNode } from 'react'

export interface IRoute {
  path: string
  authOnly?: boolean
  page: any
}
