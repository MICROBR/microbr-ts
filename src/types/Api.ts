export interface IApi {
  fetch(): Promise<any>
  get(id: string): Promise<any>
  create(data: any): Promise<any>
  update(data: any): Promise<any>
  delete(id: number | string): Promise<any>
}
