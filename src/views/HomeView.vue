<script setup>
import { computed, ref } from 'vue'
import { articles, paths } from '@/data'
import FeatureCard from '@/components/FeatureCard.vue'
import CompactCard from '@/components/CompactCard.vue'
import AppButton from '@/components/AppButton.vue'

const featured = articles[0]
const secondary = articles.slice(1, 4)
const gridArticles = articles.slice(4)

const showAll = ref(false)

const visibleArticles = computed(() =>
  showAll.value ? gridArticles : gridArticles.slice(0, 6),
)

function pathMinutes(path) {
  return path.steps.reduce((total, id) => {
    const article = articles.find((entry) => entry.id === id)
    return total + (article?.readingTime ?? 0)
  }, 0)
}
</script>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>Latest</h2>
          <span class="meta">All articles →</span>
        </div>

        <div class="latest">
          <FeatureCard :article="featured" />
          <div class="latest-list">
            <CompactCard
              v-for="article in secondary"
              :key="article.id"
              :article="article"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section--tight">
      <div class="container">
        <div class="section-head">
          <h2>Learning paths</h2>
          <span class="meta">{{ paths.length }} paths</span>
        </div>

        <ul class="paths">
          <li v-for="path in paths" :key="path.id" class="path-row">
            <div class="path-text">
              <h3>{{ path.title }}</h3>
              <p class="meta">{{ path.steps.length }} steps · {{ pathMinutes(path) }} min</p>
            </div>

            <div class="path-track" aria-hidden="true">
              <span class="path-fill" style="width: 0"></span>
            </div>

            <span class="meta">{{ path.steps.length }} reads</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>All articles</h2>
          <span class="meta">{{ visibleArticles.length }} of {{ gridArticles.length }}</span>
        </div>

        <div class="grid">
          <FeatureCard
            v-for="article in visibleArticles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div v-if="!showAll" class="more">
          <AppButton variant="ghost" @click="showAll = true">
            Show all {{ gridArticles.length }} articles
          </AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-control);
  margin-bottom: var(--space-stack);
}

.latest {
  display: grid;
  gap: var(--space-gutter);
}

.latest-list {
  display: flex;
  flex-direction: column;
}

.paths {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-card);
  background: var(--colour-surface);
}

.path-row {
  display: flex;
  align-items: center;
  gap: var(--space-control);
  padding: var(--space-control) var(--space-stack);
  margin: 0;
  border-bottom: 1px solid var(--colour-hairline);
}

.path-row:last-child {
  border-bottom: 0;
}

.path-text {
  flex: 1;
}

.path-text h3 {
  margin-bottom: 2px;
}

.path-track {
  display: none;
  width: 120px;
  height: 2px;
  border-radius: 1px;
  background: var(--colour-hairline);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-gutter);
}

.more {
  margin-top: var(--space-stack);
}

@media (min-width: 900px) {
  .latest {
    grid-template-columns: 2fr 1.15fr;
    align-items: start;
  }

  .path-track {
    display: block;
  }
}
</style>
