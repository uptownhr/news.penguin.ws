import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'

export const useNewsStore = defineStore('news', () => {
  const news = ref([])

  const getNews = async () => {
    const res = await axios.get('http://localhost:3000/hnews/to-review')

    news.value = res.data
  }

  return {
    getNews,
    news,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
