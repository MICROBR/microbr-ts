import Index from '@/views/Index.vue'
import Signup from '@/views/signup.vue'
import Login from '@/views/login.vue'
import Dashboard from '@/views/dashboard.vue'

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
    path: '/signup/:userId?',
    name: 'Signup',
    component: Signup,
    layout: 'AuthLayout'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: 'AuthLayout'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: 'AuthLayout'
  }
]
