<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from '@/stores/articles.js'
import FeatureCard from '@/components/FeatureCard.vue'
import AppChip from "@/components/AppChip.vue";

const route = useRoute()
const router = useRouter()

const query = ref(String(route.query.q ?? ''))

// Get input value from search field, convert to lowercase, return matching items.
const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return store.items

  return store.items.filter((article) =>
      [article.title, article.excerpt].some((field) =>
          field.toLowerCase().includes(q),
      ),
  )
})

// This watch only checks the query input's value. Does not track URL changes sadly.
watch(query, (value) => {
  router.replace({ query: value ? { q: value } : {} })
})
</script>

<template>
  <div class="container section">
    <h1>Find something to read</h1>

    <div class="field">
      <label for="q">Search articles</label>
      <input
          id="q"
          v-model="query"
          type="search"
          placeholder="black holes, Mars, rockets…"
      />
    </div>

    <p class="meta" role="status">
      {{ results.length }} {{ results.length === 1 ? 'article' : 'articles' }}
      {{ query.trim() ? `matching "${query.trim()}"` : 'in total' }}
    </p>

    <div v-if="results.length" class="grid">
      <FeatureCard v-for="article in results" :key="article.id" :article="article" />
    </div>

    <!-- "Not found" state. Show a card that explains nothing was found and guide the user to one of 3 sample categories. -->
    <div v-else class="empty">
      <h1>Nothing matches "{{ query.trim() }}".</h1>
      <p class="meta">Check the spelling, or start from one of these categories instead.</p>
      <div>
        <AppChip to="/category/deep-space" label="Deep Space"/>
        <AppChip to="/category/rockets-launches" label="Rockets & Launches"/>
        <AppChip to="/category/stargazing" label="Stargazing"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-micro);
  max-width: 520px;
  margin-block: var(--space-stack) var(--space-control);
}

label {
  font-size: var(--type-meta);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--colour-text-secondary);
}

input {
  font: inherit;
  color: var(--colour-text-primary);
  background: var(--colour-surface);
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-control);
  padding: 10px 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-gutter);
  margin-top: var(--space-gutter);
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
  padding: var(--space-card);
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-card);
  background: var(--colour-surface);
}

.empty p {
  margin: 0;
}

.empty div {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>