import { MutationTree } from 'vuex'
import { UserState } from './types'

export const mutations: MutationTree<UserState> = {
  setUser(state, { user, token }) {
    state.user = user
    localStorage.authToken = token
    localStorage.setItem('user', JSON.stringify(user))
  },
  retrieveUser(state) {
    //@ts-ignore
    state.user = JSON.parse(localStorage.getItem('user'))
    state.token = localStorage.getItem('authToken')
  }
}
