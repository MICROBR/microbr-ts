import axios from 'axios'

export interface IAxiosConfig {
  method?: any
  params?: object
  data?: object
  headers?: object
}

export default class HTTP {
  protected url: string
  protected method: any
  protected params: object
  protected data: object
  protected headers: object
  constructor(url: string, config: IAxiosConfig = {}) {
    this.url = url
    const { method, data, params, headers } = config
    this.method = method || 'GET'
    this.params = params || {}
    this.data = data || {}
    this.headers = headers || {}
  }
  sendHttpRequest(): Promise<any> {
    return axios(this.url, {
      method: this.method,
      params: this.params,
      data: this.data,
      headers: this.headers
    })
  }
}
