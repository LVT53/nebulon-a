<script setup>
import { store } from '@/stores/articles.js'
import { categories } from '@/data'
import { formatDate } from '@/utils/format'
import AppButton from '@/components/AppButton.vue'
import AppChip from '@/components/AppChip.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function categoryLabel(slug) {
  return categories.find((category) => category.slug === slug)?.label ?? slug
}
</script>

<template>
  <div class="container section">
    <div class="head">
      <h1>Articles</h1>
      <span class="meta">{{ store.items.length }} published</span>
      <AppButton @click="router.push('/admin/new')">New article</AppButton>
    </div>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Category</th>
        <th scope="col">Published</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="article in store.items" :key="article.id">
        <td class="title">{{ article.title }}</td>
        <td><AppChip :label="categoryLabel(article.category)" /></td>
        <td class="meta">{{ formatDate(article.date) }}</td>
        <td class="actions">
          <AppButton variant="secondary" @click="router.push(`/admin/article/${article.id}`)">Edit</AppButton>
          <AppButton variant="ghost" @click="store.remove(article.id)">Delete</AppButton>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--space-stack);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  font-size: var(--type-meta);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--colour-text-secondary);
  padding-bottom: var(--space-control);
}

th:last-child {
  text-align: right;
}

tbody tr {
  border-top: 1px solid var(--colour-hairline);
}

td {
  padding: var(--space-control) 0;
  vertical-align: middle;
}

.actions {
  display: flex;
  gap: var(--space-micro);
  justify-content: flex-end;
}
</style>