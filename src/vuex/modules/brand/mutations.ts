import { MutationTree } from 'vuex'
import { BrandState } from './types'

export const mutations: MutationTree<BrandState> = {
  setBrands(state, brands) {
    state.brands = brands //.sort(objSort('coins', 'ascending'));
  }
}
