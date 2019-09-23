import axios from 'axios'
import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/types/Api'

export class AxiosApi extends BaseApi implements IApi {
  async fetch(): Promise<any> {
    const { data } = await axios.get(this.url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    return data
  }
  async create(data: any) {
    return await axios.post(`${this.url}/create`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
  }
}
