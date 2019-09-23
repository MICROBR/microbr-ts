import { createRandomString } from '@/utils/functions'

class InstagramHTTP {
  private instagramUrl: string = 'https://api.instagram.com/'
  connect(url: string) {
    const client = process.env.VUE_APP_INSTAGRAM_CLIENT
    if (!client) throw Error('Instagram client not found')
    const user_identifier = createRandomString(10)
    const redirectUri = `${process.env.VUE_APP_API_URL}/instagram/callback`

    window.open(
      `${this.instagramUrl}${url}?client_id=${client}&redirect_uri=${redirectUri}&response_type=code&state=${user_identifier}`,
      '_self'
    )
  }
}

export default InstagramHTTP
