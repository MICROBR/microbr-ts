import axios from 'axios'
import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/types/Api'

export class AxiosApi extends BaseApi implements IApi {
  async fetch(url: string): Promise<any> {
    const { data } = await axios.get(`${this.baseUrl}${url}`)
    return data
  }
}
