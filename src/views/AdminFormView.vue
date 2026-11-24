<script setup>
import { reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { categories } from '@/data'
import { store } from '@/stores/articles.js'
import AppButton from '@/components/AppButton.vue'

const router = useRouter()
const route = useRoute()

const existing = computed(() =>
  route.params.id ? store.items.find((article) => article.id === route.params.id) : null,
)

function bodyToText(blocks) {
  return (blocks ?? [])
      .filter((block) => block.type === 'p')
      .map((block) => block.text)
      .join('\n\n')
}

const draft = reactive({
  title: existing.value?.title || '',
  excerpt: existing.value?.excerpt ?? '',
  category: existing.value?.category ?? 'deep-space',
  date: existing.value?.date ?? new Date().toISOString().slice(0, 10),
  readingTime: existing.value?.readingTime ?? 1,
  image: existing.value?.image ?? '/img/city-sky.jpg',
  credit: existing.value?.credit ?? '',
  body: bodyToText(existing.value?.body),
})

function toBody(text) {
  return text
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => ({ type: 'p', text: paragraph }))
}

const heading = computed(() => (existing.value ? 'Edit article' : 'New article'))

function save() {
  const payload = {
    title: draft.title,
    excerpt: draft.excerpt,
    category: draft.category,
    date: draft.date,
    readingTime: draft.readingTime,
    image: draft.image,
    credit: draft.credit,
    body:
        existing.value && draft.body === bodyToText(existing.value.body)
            ? existing.value.body
            : toBody(draft.body),
  }

  if (existing.value) {
    store.update(existing.value.id, payload)
  } else {
    store.create(payload)
  }

  router.push('/admin')
  }
</script>

<template>
  <div class="container section">
    <p class="eyebrow">Admin</p>
    <h1>{{ heading }}</h1>
    <form class="form" @submit.prevent="save">
      <div>
        <div>
          <h2>Basics</h2>

          <label for="title">Title</label>
          <input id="title" v-model="draft.title" type="text" />

          <label for="excerpt">Excerpt</label>
          <textarea id="excerpt" v-model="draft.excerpt" rows="2"></textarea>

          <label for="category">Category</label>
          <select id="category" v-model="draft.category">
            <option v-for="category in categories" :key="category.id" :value="category.slug">
              {{ category.label }}
            </option>
          </select>

          <label for="date">Published</label>
          <input id="date" v-model="draft.date" type="date" />

          <label for="readingTime">Reading time (minutes)</label>
          <input id="readingTime" v-model.number="draft.readingTime" type="number" min="1" />
        </div>
        <div>
          <h2>Media</h2>

          <label for="image">Image path</label>
          <input id="image" v-model="draft.image" type="text" />
          <p class="meta">Hint for myself: /img/uranus.jpg, /img/voyager.jpg or /img/rings.jpg</p>

          <label for="credit">Credit</label>
          <input id="credit" v-model="draft.credit" type="text" />
        </div>
        <div>
          <h2>Body</h2>

          <label for="body">Article text</label>
          <textarea id="body" v-model="draft.body" rows="10"></textarea>
          <p class="meta">Leave a blank line between paragraphs.</p>
        </div>
      </div>
      <div class="actions">
        <AppButton type="submit">Save article</AppButton>
        <AppButton variant="secondary" @click="router.push('/admin')">Cancel</AppButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-micro);
}

.form div {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px 25px;
}

.form div div {
  display: flex;
  flex-direction: column;
}

h2 {
  margin-top: var(--space-block);
  margin-bottom: var(--space-micro);
}

label {
  margin-top: var(--space-control);
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--colour-text-secondary);
}

input,
textarea,
select {
  font: inherit;
  color: var(--colour-text-primary);
  background: var(--colour-surface);
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-control);
  padding: 10px 14px;
}

input[type='date'],
input[type='number'] {
  color-scheme: dark;
}

.actions {
  display: flex;
  gap: var(--space-micro);
  margin-top: var(--space-stack);
}
</style>