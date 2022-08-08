<script setup lang="ts">
const news = useNewsStore()
const user = useUserStore()
const name = $ref(user.savedName)
const router = useRouter()
const { t } = useI18n()

const domain = (url: string) => {
  const link = new URL(url)

  return link.hostname
}

const formatDate = (date: string) => useDateFormat(date, 'YYYY-MM-DD')

news.getNews()
</script>

<template>
  <div>
    <ol class="list-inside space-y-2">
      <li v-for="post in news.posts" :key="post.id">
        <div class="flex space-x-4 items-center">
          <button
            @click="news.skipNews(post.id)"
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SKIP
          </button>
          <button
            @click="news.selectNews(post.id)"
            type="button"
            class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            SELECT
          </button>
          <span>{{ formatDate(post.createdAt) }}</span>
          <span>{{ post.id }}</span>
          <a :href="post.url" target="_blank" class="font-bold">{{
            post.title
          }}</a>

          <span>{{ domain(post.url) }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<route lang="yaml">
name: reviews
meta:
  layout: home
</route>
