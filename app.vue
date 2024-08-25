<template>
  <div>
    <NuxtRouteAnnouncer />
    <ul>
      <li v-for="msg in messages">
        name: {{ msg.name }}, title: {{ msg.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: messages, refresh } = await useFetch("/api/message");
</script>
