<script setup>
import { reactive, computed } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { categories } from '@/data'
import { store } from '@/stores/articles.js'
import AppButton from '@/components/AppButton.vue'

const router = useRouter()
const route = useRoute()

// /admin/new and /admin/article/:id share this component. A computed re-reads if the id changes.
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

const errors = reactive({})

const heading = computed(() => (existing.value ? 'Edit article' : 'New article'))

function toBody(text) {
  return text
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => ({ type: 'p', text: paragraph }))
}

function clearError(field) {
  delete errors[field]
}

function validate() {
  Object.keys(errors).forEach((field) => delete errors[field])

  if (draft.title.trim().length < 4) {
    errors.title = 'Give the article a title of at least 4 characters.'
  }

  if (draft.excerpt.trim().length < 20) {
    errors.excerpt = 'Write an excerpt of at least 20 characters.'
  }

  if (!categories.some((category) => category.slug === draft.category)) {
    errors.category = 'Choose a category.'
  }

  const today = new Date().toISOString().slice(0, 10)

  if (!draft.date) {
    errors.date = 'Choose a publish date.'
  } else if (Number.isNaN(Date.parse(draft.date))) {
    errors.date = 'Enter a valid date.'
  } else if (draft.date > today) {
    errors.date = 'The publish date cannot be in the future.'
  }

  const minutes = Number(draft.readingTime)

  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 60) {
    errors.readingTime = 'Reading time must be a whole number between 1 and 60.'
  }

  if (!toBody(draft.body).length) {
    errors.body = 'Add at least one paragraph of article text.'
  }

  return Object.keys(errors).length === 0
}

function save() {
  if (!validate()) {
    // First key assigned = first rule that failed. Input ids match these keys.
    document.getElementById(Object.keys(errors)[0])?.focus()
    return
  }

  const payload = {
    title: draft.title.trim(),
    excerpt: draft.excerpt.trim(),
    category: draft.category,
    date: draft.date,
    readingTime: Number(draft.readingTime),
    image: draft.image.trim(),
    credit: draft.credit.trim(),
    // Textarea untouched, then write the original blocks back, so figures and quotes survive an edit.
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
  <div v-if="!route.params.id || existing" class="container section">
    <p class="eyebrow">Admin</p>
    <h1>{{ heading }}</h1>

    <form class="form" @submit.prevent="save" novalidate>
      <div>
        <div>
          <h2>Basics</h2>

          <label for="title">Title</label>
          <input
              id="title"
              v-model="draft.title"
              type="text"
              :class="{ invalid: errors.title }"
              @input="clearError('title')"
          />
          <p v-if="errors.title" class="error">{{ errors.title }}</p>

          <label for="excerpt">Excerpt</label>
          <textarea
              id="excerpt"
              v-model="draft.excerpt"
              rows="2"
              :class="{ invalid: errors.excerpt }"
              @input="clearError('excerpt')"
          ></textarea>
          <p v-if="errors.excerpt" class="error">{{ errors.excerpt }}</p>

          <label for="category">Category</label>
          <select
              id="category"
              v-model="draft.category"
              :class="{ invalid: errors.category }"
              @change="clearError('category')"
          >
            <option v-for="category in categories" :key="category.id" :value="category.slug">
              {{ category.label }}
            </option>
          </select>
          <p v-if="errors.category" class="error">{{ errors.category }}</p>

          <label for="date">Published</label>
          <input
              id="date"
              v-model="draft.date"
              type="date"
              :class="{ invalid: errors.date }"
              @input="clearError('date')"
          />
          <p v-if="errors.date" class="error">{{ errors.date }}</p>

          <label for="readingTime">Reading time (minutes)</label>
          <input
              id="readingTime"
              v-model.number="draft.readingTime"
              type="number"
              min="1"
              max="60"
              :class="{ invalid: errors.readingTime }"
              @input="clearError('readingTime')"
          />
          <p v-if="errors.readingTime" class="error">{{ errors.readingTime }}</p>
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
          <textarea
              id="body"
              v-model="draft.body"
              rows="10"
              :class="{ invalid: errors.body }"
              @input="clearError('body')"
          ></textarea>
          <p v-if="errors.body" class="error">{{ errors.body }}</p>
          <p class="meta">Leave a blank line between paragraphs.</p>
        </div>
      </div>

      <div class="actions">
        <AppButton type="submit">Save article</AppButton>
        <AppButton variant="secondary" @click="router.push('/admin')">Cancel</AppButton>
      </div>
    </form>
  </div>

  <div v-else class="container section">
    <h1>Article not found</h1>
    <p class="meta">No article matches "{{ route.params.id }}".</p>
    <RouterLink to="/admin" class="meta">Back to articles</RouterLink>
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

.invalid {
  border-color: var(--colour-danger);
}

.error {
  margin: 6px 0 0;
  font-size: var(--type-meta);
  line-height: var(--type-meta-line);
  color: var(--colour-danger);
}

.actions {
  display: flex;
  gap: var(--space-micro);
  margin-top: var(--space-stack);
}

@media (max-width: 900px) {
  .form div {
    flex-direction: column;
  }
}
</style>