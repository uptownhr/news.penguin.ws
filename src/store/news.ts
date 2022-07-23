import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { Ref } from 'vue'

interface NewsPost {
  id: number
}

export const useNewsStore = defineStore('news', () => {
  const posts: Ref<NewsPost[]> = ref<NewsPost[]>([])

  const getNews = async () => {
    const res = await axios.get<NewsPost[]>(
      `//${import.meta.env.VITE_PENGUIN_API}/hnews/to-review`,
    )

    posts.value = res.data
  }

  const removeNews = async (id: number) => {
    const index = posts.value.findIndex((item) => item.id === id)
    posts.value.splice(index, 1)
  }

  const selectNews = async (id: number) => {
    await axios.get(`//${import.meta.env.VITE_PENGUIN_API}/hnews/select/${id}`)

    removeNews(id)
  }

  const skipNews = async (id: number) => {
    await axios.get(`//${import.meta.env.VITE_PENGUIN_API}/hnews/skip/${id}`)

    removeNews(id)
  }

  return {
    getNews,
    removeNews,
    selectNews,
    skipNews,
    posts,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
