<script setup lang="ts">
const contacts = useContactStore()
const formatDate = (date: string) => useDateFormat(date, 'YYYY-MM-DD')

contacts.getContacts()

const createContactForm = reactive({
  name: '',
  email: '',
})

const createContact = () => {
  contacts.createContact({
    email: createContactForm.email,
    name: createContactForm.name,
  })
  createContactForm.name = ''
  createContactForm.email = ''
}
</script>

<template>
  <div>
    <form
      @submit.prevent="createContact(createContactForm)"
      class="space-y-8 divide-y divide-gray-200"
    >
      <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Add Contact
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Contact Information
            </p>
          </div>

          <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="username"
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Name
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    v-model="createContactForm.name"
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div
              class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
            >
              <label
                for="username"
                class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email
              </label>
              <div class="mt-1 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg flex rounded-md shadow-sm">
                  <input
                    v-model="createContactForm.email"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
              <pre>
                {{ createContactForm }}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <div class="flex justify-end">
          <button
            type="submit"
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>

    <ol class="list-inside space-y-2">
      <li v-for="contact in contacts.contacts" :key="contact.id">
        <div class="flex space-x-4 items-center">
          <button
            @click="contacts.removeContact(contact.id)"
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Remove
          </button>
          <span>{{ formatDate(contact.createdAt) }}</span>
          <span>{{ contact.id }}</span>
          <span>{{ contact.email }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
