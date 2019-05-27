import { RouteConfig } from 'vue-router'

export type BingoMeta = {
  topLevel: true
  friendlyName: string
  translationKey: string
  iconEmoji: string
  [key: string]: any
} | {
  [key: string]: any
}

export interface BingoRoute extends RouteConfig {
  name: string,
  meta?: BingoMeta
}

export interface RouteList extends Array<any> {
  [index:number]: BingoRoute
}
