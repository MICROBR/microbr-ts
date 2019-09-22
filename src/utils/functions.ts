export const createRandomString = (length: number) => {
  let string = ' '
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return string
}
