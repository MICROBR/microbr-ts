import Index from '../views/Index.vue'
import Signup from '../views/signup.vue'
import Login from '@/views/login.vue'

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
    path: '/signup/:user_id?',
    name: 'Signup',
    component: Signup,
    layout: 'AuthLayout'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: 'AuthLayout'
  }
]
