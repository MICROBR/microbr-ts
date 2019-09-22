import Index from '../views/Index.vue'
import Signup from '../views/signup.vue'

export interface Route {
  path: string
  name: string
  component: any
  beforeEnter?: any
  redirect?: string
  params?: any
  layout?: string
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Index',
    component: null,
    redirect: '/signup'
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    layout: 'AuthLayout'
  }
]
