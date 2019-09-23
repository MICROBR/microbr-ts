import { Module } from 'vuex'
import { RootState } from '@/vuex/types'
import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { BrandState } from './types'

const state = {
  brands: []
}

export const brand: Module<BrandState, RootState> = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
