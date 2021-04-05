import axios, { AxiosResponse } from 'axios'
import https from 'https'

type methodType = 'post' | 'get' | 'put' | 'delete'
type ApiType = 'editorial' | 'location'

interface baseQuerys {
  url: string
  method: {
    methodType: methodType
    params?: any
  }
  options?: {
    apiBase: ApiType
  }
}

type RequestTypes<K> = {
  [key in methodType]: () => Promise<AxiosResponse<K>>
}

type ApyTypes = {
  [key in ApiType]: string
}

export function makeCall<T>({ url, method, options }: baseQuerys): Promise<AxiosResponse<T>> {
  const apiAlternatives: ApyTypes = {
    editorial: process.env.NEXT_PUBLIC_EDITORIAL_API as string,
    location: process.env.NEXT_PUBLIC_LOCATION_API as string,
  }

  const api = axios.create({
    baseURL: apiAlternatives[options?.apiBase || 'editorial'],
    headers: { accept: '*/*' },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  })
  const querysTypes: RequestTypes<T> = {
    get: async () => api.get(url, { params: method.params }),
    put: () => api.put(url, method.params),
    post: () => api.post(url, method.params),
    delete: () => api.delete(url),
  }

  return querysTypes[method.methodType]()
}
