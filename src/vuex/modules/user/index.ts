import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { UserState } from './types'

const state = {
  user: null,
  token: null
}
export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
