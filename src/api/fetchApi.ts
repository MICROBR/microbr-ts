import { BaseApi } from '@/api/baseApi'
import { IApi } from '@/types/Api'

export class FetchApi extends BaseApi implements IApi {
  async fetch(): Promise<any> {
    const response = await fetch(this.url)
    return await response.json()
  }
}
