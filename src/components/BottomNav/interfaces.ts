import { RouteConfig } from 'vue-router'

export type BingoMeta = {
  topLevel: true,
  friendlyName: string,
  iconEmoji: string
  [key: string]: any
} | {
  topLevel: false,
  friendlyName?: string,
  [key: string]: any
}

export interface BingoRoute extends RouteConfig {
  name: string,
  meta?: BingoMeta
}

export interface RouteList extends Array<any> {
  [index:number]: BingoRoute
}
