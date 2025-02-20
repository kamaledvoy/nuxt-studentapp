<template>
  <div>
    <h1>GraphQL User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.userName }} - {{ user.userEmail }}
      </li>
    </ul>
  </div>
</template>

<script>
import { FIND_ALL_USER } from '~/services/graphql'

export default {
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const { data } = await client.query({ query: FIND_ALL_USER })
    return { users: data.findAllUser }
  },
}
</script>