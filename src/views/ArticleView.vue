<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { articles, author, categories, paths } from '@/data'
import { formatDate } from '@/utils/format'
import AppChip from '@/components/AppChip.vue'
import GistBox from '@/components/GistBox.vue'
import CompactCard from '@/components/CompactCard.vue'

const route = useRoute()

const article = computed(() =>
  articles.find((entry) => entry.slug === route.params.slug),
)

const categoryLabel = computed(
  () => categories.find((c) => c.slug === article.value?.category)?.label ?? '',
)

const related = computed(() => {
  if (!article.value) return []
  return articles
    .filter((entry) => entry.category === article.value.category && entry.id !== article.value.id)
    .slice(0, 3)
})

const path = computed(() =>
  article.value?.pathId ? paths.find((p) => p.slug === article.value.pathId) : null,
)

const nextInPath = computed(() => {
  if (!path.value || !article.value) return null
  const stepIndex = path.value.steps.indexOf(article.value.id)
  const nextId = path.value.steps[stepIndex + 1]
  return nextId ? articles.find((entry) => entry.id === nextId) : null
})
</script>

<template>
  <article v-if="article">
    <header class="container hero">
      <div class="hero-media">
        <img :src="article.image" :alt="article.title" />
      </div>

      <div class="hero-meta">
        <AppChip :label="categoryLabel" />

        <h1>{{ article.title }}</h1>

        <p class="lead">{{ article.excerpt }}</p>

        <hr class="rule hero-rule" />

        <p class="meta">
          {{ author.name }} · {{ formatDate(article.date) }} ·
          {{ article.readingTime }} min read
        </p>
      </div>
    </header>

    <hr class="rule" />

    <div class="container">
      <div class="reading">
        <GistBox
          v-if="article.gist"
          :gist="article.gist"
          :reading-time="article.readingTime"
        />

        <template v-for="(block, index) in article.body" :key="index">
          <p v-if="block.type === 'p'" class="reading-text">{{ block.text }}</p>

          <h2 v-else-if="block.type === 'h2'" class="body-heading">{{ block.text }}</h2>

          <blockquote v-else-if="block.type === 'quote'" class="pullquote">
            {{ block.text }}
          </blockquote>

          <ul v-else-if="block.type === 'list'" class="points">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>

          <figure v-else-if="block.type === 'figure'" class="figure">
            <div class="figure-media">
              <img :src="block.src" :alt="block.caption" loading="lazy" />
            </div>
            <figcaption class="meta">
              {{ block.caption }} <span class="credit">{{ block.credit }}</span>
            </figcaption>
          </figure>
        </template>

        <aside v-if="nextInPath" class="path-next">
          <div>
            <p class="eyebrow">Next in {{ path.title }}</p>
            <RouterLink :to="`/article/${nextInPath.slug}`" class="path-next-title">
              {{ nextInPath.title }}
            </RouterLink>
          </div>
          <RouterLink :to="`/paths/${path.slug}`" class="meta">See the path →</RouterLink>
        </aside>
      </div>
    </div>

    <section v-if="related.length" class="section">
      <div class="container">
        <div class="section-head">
          <h2>More from {{ categoryLabel }}</h2>
          <RouterLink :to="`/category/${article.category}`" class="meta">See all →</RouterLink>
        </div>

        <div class="related">
          <CompactCard v-for="entry in related" :key="entry.id" :article="entry" />
        </div>
      </div>
    </section>
  </article>

  <div v-else class="container section">
    <h1>Article not found</h1>
    <p class="meta">No article matches “{{ route.params.slug }}”.</p>
    <RouterLink to="/" class="back-link">Back to home</RouterLink>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  gap: var(--space-stack);
  padding-block: var(--space-block);
}

.hero-media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-image);
  overflow: hidden;
  background: var(--colour-surface-hover);
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-control);
}

.hero-meta h1 {
  font-size: var(--type-hero);
  line-height: var(--type-hero-line);
}

.hero-meta .lead {
  margin: 0;
}

.hero-rule {
  width: 100%;
}

.hero-meta .meta {
  margin: 0;
}

.reading {
  max-width: 680px;
  margin-inline: auto;
  padding-block: var(--space-block);
  display: flex;
  flex-direction: column;
  gap: var(--space-stack);
}

.reading-text {
  margin: 0;
  font-size: var(--type-reading);
  line-height: var(--type-reading-line);
  color: var(--colour-text-body);
}

.body-heading {
  margin-top: var(--space-stack);
}

.pullquote {
  margin: 0;
  padding-left: var(--space-stack);
  border-left: 3px solid var(--colour-accent);
  font-family: var(--font-display);
  font-size: 20px;
  line-height: 27px;
  color: var(--colour-text-primary);
}

.points {
  margin: 0;
  padding-left: var(--space-stack);
  color: var(--colour-text-body);
}

.points li {
  margin-bottom: var(--space-micro);
}

.figure {
  margin: 0;
}

.figure-media {
  aspect-ratio: 16 / 9;
  border-radius: var(--radius-image);
  overflow: hidden;
  background: var(--colour-surface-hover);
  margin-bottom: var(--space-micro);
}

.figure-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.credit {
  opacity: 0.7;
}

.path-next {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-control);
  padding: var(--space-stack);
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-card);
  background: var(--colour-surface);
}

.path-next .eyebrow {
  margin: 0 0 4px;
}

.path-next-title {
  font-family: var(--font-display);
  font-size: var(--type-card);
  line-height: var(--type-card-line);
  font-weight: 500;
}

.path-next-title:hover {
  color: var(--colour-accent);
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-control);
  margin-bottom: var(--space-stack);
}

.related {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-gutter);
}

.back-link {
  color: var(--colour-accent);
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: var(--space-gutter);
  }
}
</style>
