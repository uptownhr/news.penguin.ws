<script setup lang="ts">
const route = useRoute()
const router = useRouter()
</script>

<template>
  <nav text-xl mt-6>
    <RouterLink :to="{ name: 'contacts' }">Contacts</RouterLink> |
    <RouterLink :to="{ name: 'reviews' }">Reviews</RouterLink>
  </nav>
  <RouterView />
</template>

<route lang="yaml">
name: adminhome
meta:
  requiresAuth: true
</route>
