import { BaseApi } from '@/api/baseApi'
import { createRandomString } from '@/utils/functions'
import { IApi } from '@/types/Api'

class InstagramHTTP extends BaseApi implements IApi {
  baseUrl: string = 'https://api.instagram.com/'
  connect(url: string) {
    const client = process.env.VUE_APP_INSTAGRAM_CLIENT
    if (!client) throw Error('Instagram client not found')
    const user_identifier = createRandomString(10)
    const redirectUri = `${this.baseUrl}/instagram/callback/`
    window.open(
      `${this.baseUrl}${url}?client_id=${client}&redirect_uri=${redirectUri}&response_type=code&state=${user_identifier}`,
      '_self'
    )
  }
}

export default InstagramHTTP
