import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { UserState } from './types'

export const getters: GetterTree<UserState, RootState> = {
  getUser(state) {
    return state.user
  }
}
