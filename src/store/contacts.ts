import { acceptHMRUpdate, defineStore } from 'pinia'
import axios from 'axios'
import type { Ref } from 'vue'

interface Contact {
  id: number
  email: string
  name?: string
  createdAt: string
}

interface ContactCreateInput {
  email: string
  name?: string
}

export const useContactStore = defineStore('contacts', () => {
  const contacts: Ref<Contact[]> = ref<Contact[]>([])

  const getContacts = async () => {
    const res = await axios.get<Contact[]>(
      `//${import.meta.env.VITE_PENGUIN_API}/contact`,
    )

    contacts.value = res.data
  }

  const createContact = async (contact: ContactCreateInput) => {
    const res = await axios.post<Contact>(
      `//${import.meta.env.VITE_PENGUIN_API}/contact`,
      contact,
    )

    contacts.value.push(res.data)
  }

  return {
    getContacts,
    createContact,
    contacts,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
