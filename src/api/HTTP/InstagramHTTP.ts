import HTTP from '@/api/HTTP/HTTP'
import { createRandomString } from '@/utils/functions'

const BASE_URL: string = 'https://api.instagram.com/'

class InstagramHTTP extends HTTP {
  constructor(url: string) {
    url = BASE_URL + url
    super(url)
  }
  connect() {
    const client = process.env.VUE_APP_INSTAGRAM_CLIENT
    if (!client) throw Error('Instagram client not found')
    const user_identifier = createRandomString(10)
    const redirectUri = `${BASE_URL}/instagram/callback/`
    window.open(
      `${this.url}?client_id=${client}&redirect_uri=${redirectUri}&response_type=code&state=${user_identifier}`,
      '_self'
    )
  }
}

export default InstagramHTTP
