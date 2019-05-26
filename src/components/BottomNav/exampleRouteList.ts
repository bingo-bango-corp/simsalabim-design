import { RouteList } from './interfaces'

export const routes: RouteList = [
  {
    path: "/",
    name: "make_money",
    meta: {
      friendlyName: 'Make Money',
      topLevel: true,
      iconEmoji: '💼',
      requiresAuth: true
    }
  },
  {
    path: "/page2",
    name: "get_stuff",
    meta: {
      friendlyName: 'Get Stuff',
      topLevel: true,
      iconEmoji: '🙏‍',
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
  }
]