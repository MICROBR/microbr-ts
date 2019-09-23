import { GetterTree } from 'vuex'
import { RootState } from '../../types'
import { BrandState } from './types'

export const getters: GetterTree<BrandState, RootState> = {
  brands(state) {
    return state.brands
  }
}
