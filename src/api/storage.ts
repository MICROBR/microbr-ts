import { IUser } from '@/types/User'

interface StorageData {
  user: IUser
}

const storageKey: string = 'microbrand'

export function checkLocalStorage() {
  return localStorage.getItem(storageKey)
}

export function storeInLocalStorage(data: StorageData): void {
  if (checkLocalStorage()) {
    const storage = getFromLocaleStorage()
    if (!data.user) {
      data.user = storage.user
    }
  }
  localStorage.setItem(storageKey, JSON.stringify(data))
}

export function getFromLocaleStorage(): StorageData {
  const storage: string | null = localStorage.getItem(storageKey)
  return {
    user: storage ? JSON.parse(storage).user : {}
  }
}

export function clearStorage(): void {
  localStorage.removeItem(storageKey)
}
