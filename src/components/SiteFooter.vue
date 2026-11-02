<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-row">
      <span class="wordmark">NEBULON-A</span>
      <nav class="links" aria-label="Site">
        <RouterLink to="/admin" class="link">Admin</RouterLink>
      </nav>
      <span class="meta">Imagery: NASA media library</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--colour-hairline);
  background: var(--colour-surface);
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-control);
  min-height: 40px;
  padding-block: 12px;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.links {
  display: flex;
  gap: var(--space-control);
}

.link {
  font-size: var(--type-meta);
  color: var(--colour-text-secondary);
  transition: color var(--transition-quick);
}

.link:hover {
  color: var(--colour-text-primary);
}

@media (max-width: 599px) {
  .footer-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-micro);
  }
}
</style>
