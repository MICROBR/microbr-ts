import HTTP, { IAxiosConfig } from './HTTP'

const BASE_URL: string = 'http://localhost:3000/'

class BackendHTTP extends HTTP {
  constructor(
    url: string,
    config: IAxiosConfig
  ) {
    url = BASE_URL + url
    super(url, config)
  }
}

export default BackendHTTP
