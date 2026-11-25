<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-row">
      <div class="wordmark">NEBULON-A</div>
      <nav class="links" aria-label="Site">
        <RouterLink to="/admin" class="link">Admin</RouterLink>
      </nav>
      <div class="meta">Imagery: NASA media library</div>
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

.footer-row nav,
.footer-row div {
  width: 33.33%;
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
  justify-content: center;
}

.link {
  font-size: var(--type-meta);
  color: var(--colour-text-secondary);
  transition: color var(--transition-quick);
}

.link:hover {
  color: var(--colour-text-primary);
}

.meta {
  text-align: right;
}

@media (max-width: 599px) {
  .footer-row {
    flex-direction: column;
    align-items: center;
    gap: var(--space-control);
  }

  .wordmark {
    text-align: center;
  }

  .meta {
    width: 100%;
    text-align: center;
  }
}
</style>
