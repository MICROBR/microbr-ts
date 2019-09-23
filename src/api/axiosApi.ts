import axios from 'axios'
import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/types/Api'

export class AxiosApi extends BaseApi implements IApi {
  async fetch(): Promise<any> {
    const { data } = await axios.get(this.url)
    return data
  }
  async create(data: any) {
    return await axios.post(`${this.url}/create`, data)
  }
}
