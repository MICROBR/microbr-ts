import { IApi } from '@/types/Api'

export class BaseApi implements IApi {
  protected baseUrl: string = process.env.VUE_APP_API_URL
  protected collection!: string
  readonly url!: string
  constructor(collection: string) {
    this.collection = collection
    this.url = `${this.baseUrl}/${this.collection}/`
  }
  async fetch(): Promise<any> {}
  async get(): Promise<any> {}
  async create(data: any): Promise<any> {}
  async update(data: any): Promise<any> {}
  async delete(id: number | string): Promise<any> {}
}
