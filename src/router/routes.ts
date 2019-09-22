import Index from '../views/Index.vue'

export interface Route {
  path: string
  name: string
  component: any
  beforeEnter?: any
  redirect?: string
  params?: any
  layout: string
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    layout: 'AppLayout'
  }
]
