<script setup>
import { computed } from 'vue'
import { store } from '@/stores/articles.js'
import AppButton from '@/components/AppButton.vue'

const props = defineProps({
  path: { type: Object, required: true },
  article: { type: Object, required: true },
  next: { type: Object, default: null },
})

const index = computed(() => props.path.steps.indexOf(props.article.id))

const readMinutes = computed(() => props.next?.readingTime ?? 0)
</script>

<template>
  <aside class="path-footer">
    <div class="text">
      <div class="segments">
        <span class="segment-row" aria-hidden="true">
          <span
              v-for="(id, i) in path.steps"
              :key="id"
              :class="['segment', { 'segment--done': i <= index }]"
          ></span>
        </span>
        <span class="meta path-name">{{ path.title.toUpperCase() }}</span>
      </div>

      <p v-if="next" class="next">Next: {{ next.title }}</p>
      <p v-else class="next">You have finished this path</p>

      <p class="meta">{{ readMinutes }} min read</p>
    </div>

    <div class="actions">
      <AppButton v-if="next" :to="`/article/${next.slug}`">Continue</AppButton>
      <AppButton variant="secondary" :to="`/paths/${path.slug}`">See the path</AppButton>
    </div>
  </aside>
</template>

<style scoped>
.path-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 28px 32px;
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-card);
  background: var(--colour-surface);
}

.text {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.segments {
  display: flex;
  align-items: center;
  gap: 10px;
}

.segment-row {
  display: flex;
  gap: 4px;
  width: 136px;
}

.segment {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: var(--colour-hairline);
}

.segment--done {
  background: var(--colour-accent);
}

.path-name {
  margin: 0;
  letter-spacing: 0.08em;
}

.next {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--type-card);
  line-height: var(--type-card-line);
  font-weight: 500;
}

.text .meta {
  margin: 0;
}

.actions {
  display: flex;
  gap: 12px;
}

@media (min-width: 900px) {
  .path-footer {
    width: 918px;
    max-width: 100%;
  }
}
</style>