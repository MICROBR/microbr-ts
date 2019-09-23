import { ActionTree } from 'vuex'
import { RootState } from '@/vuex/types'
import { BrandState } from '@/vuex/modules/brand/types'
import { AxiosApi } from '@/api/axiosApi'

const api = new AxiosApi('brands')

export const actions: ActionTree<BrandState, RootState> = {
  async fetchBrands({ commit }): Promise<any> {
    await api
      .fetch()
      .then(response => {
        console.log(response)
        commit('setBrands', response.brands)
      })
      .catch(e => console.error(e))
  }
}
