import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { Ref } from 'vue'

type optional = string | null

const localStorage = import.meta.env.SSR
  ? {
      setItem: (): optional => null,
      getItem: (): optional => null,
    }
  : window.localStorage

interface LoginInput {
  username: string
  password: string
}

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isLoggedIn: Ref<boolean> = ref(false)

    const login = ({ username, password }: LoginInput) => {
      return axios
        .post(`//${import.meta.env.VITE_PENGUIN_API}/auth/login`, {
          username,
          password,
        })
        .then(({ data }) => {
          isLoggedIn.value = true

          return data
        })
    }

    return {
      login,
      isLoggedIn,
    }
  },
  {
    persist: {
      storage: localStorage,
    },
  },
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
