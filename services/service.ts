export type httpMethods = 'GET' | 'POST'

export default interface Service {
    baseUrl?: string
    token?: string

    fetch(route: string, payload?: any): any
}