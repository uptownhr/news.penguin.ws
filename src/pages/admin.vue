<template>
  <RouterView />
</template>

<route lang="yaml">
name: adminhome
meta:
  requiresAuth: true
  layout: admin
</route>
