import axios, { AxiosInstance } from 'axios'

export interface Repository {
  id: number
  name: string
  description: string
  stargazers_count: number
  language: string
}

export interface GitHubResponse {
  items: Repository[]
  total_count: number
}

const api: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization:
      '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',
  },
})

export async function searchRepositories(
  query: string,
): Promise<GitHubResponse> {
  try {
    const response = await api.get(`/search/repositories?q=${query}`)
    return response.data as GitHubResponse
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error)
    throw error
  }
}
export default api
