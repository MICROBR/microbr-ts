import { IUser } from '@/types/User'

export interface UserState {
  user: IUser | null
  token: string | null
}
