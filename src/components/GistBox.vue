<script setup>
defineProps({
  gist: { type: Object, required: true },
  readingTime: { type: Number, default: 0 },
})
</script>

<template>
  <aside class="gist" aria-label="The gist">
    <div class="gist-head">
      <span class="eyebrow">The gist</span>
      <span class="meta">{{ readingTime }} min read</span>
    </div>

    <div class="gist-body">
      <p class="text">{{ gist.text }}</p>
    </div>

    <hr class="rule" />

    <div class="words">
      <p class="eyebrow">New words</p>
      <dl>
        <template v-for="term in gist.terms" :key="term.term">
          <dt>{{ term.term }}</dt>
          <dd>{{ term.definition }}</dd>
        </template>
      </dl>
    </div>
  </aside>
</template>

<style scoped>
.gist {
  padding: var(--space-stack);
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-card);
  background: var(--colour-surface);
}

.gist-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-control);
}

.gist-body {
  padding-left: var(--space-control);
  border-left: 2px solid var(--colour-accent);
  margin-bottom: var(--space-stack);
}

.text {
  margin: 0;
}

.rule {
  margin-bottom: var(--space-stack);
}

.words .eyebrow {
  margin: 0 0 var(--space-control);
}

dl {
  margin: 0;
}

dt {
  font-family: var(--font-display);
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 2px;
}

dd {
  margin: 0 0 var(--space-control);
  font-size: 14px;
  line-height: 21px;
  color: var(--colour-text-secondary);
}

dd:last-child {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .gist {
    padding: var(--space-card);
  }
}
</style>
