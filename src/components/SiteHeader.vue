<script setup>
import { ref } from 'vue'
import { categories } from '@/data'
import { RouterLink } from 'vue-router'
import { Menu, X, Search } from '@lucide/vue'

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-row">
      <RouterLink
          to="/"
          class="wordmark"
      >
        NEBULON-A
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav
          class="nav desktop-nav"
          aria-label="Categories"
      >
        <RouterLink
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.slug}`"
            class="nav-link"
        >
          {{ category.label }}
        </RouterLink>
      </nav>

      <!-- Desktop Actions -->
      <div class="actions desktop-actions">
        <RouterLink
            to="/paths"
            class="nav-link"
        >
          Learning Paths
        </RouterLink>

        <RouterLink
            to="/search"
            class="nav-link search-icon"
        >
          <Search
              :size="18"
              :stroke-width="1"
          />
        </RouterLink>
      </div>

      <!-- Mobile Header Actions -->
      <div class="mobile-header-actions">
        <RouterLink
            to="/search"
            class="nav-link search-icon"
        >
          <Search
              :size="18"
              :stroke-width="1"
          />
        </RouterLink>

        <button
            class="mobile-menu-button"
            type="button"
            aria-label="Open navigation"
            @click="isMenuOpen = true"
        >
          <Menu
              :size="24"
              :stroke-width="1.5"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Fullscreen Navigation -->
    <Transition name="mobile-menu">
      <div
          v-if="isMenuOpen"
          class="mobile-menu"
      >
        <div class="container mobile-menu-header">
          <RouterLink
              to="/"
              class="wordmark"
              @click="closeMenu"
          >
            NEBULON-A
          </RouterLink>

          <button
              class="mobile-menu-button mobile-close"
              type="button"
              aria-label="Close navigation"
              @click="closeMenu"
          >
            <X
                :size="24"
                :stroke-width="1.5"
            />
          </button>
        </div>

        <div class="container mobile-menu-content">
          <div class="mobile-actions">
            <RouterLink
                to="/paths"
                class="nav-link"
                @click="closeMenu"
            >
              Learning Paths
            </RouterLink>

            <RouterLink
                to="/search"
                class="nav-link search-icon"
                @click="closeMenu"
            >
              <Search
                  :size="18"
                  :stroke-width="1"
              />
            </RouterLink>
          </div>

          <nav
              class="mobile-nav"
              aria-label="Mobile Categories"
          >
            <RouterLink
                v-for="category in categories"
                :key="category.id"
                :to="`/category/${category.slug}`"
                class="mobile-nav-link"
                @click="closeMenu"
            >
              {{ category.label }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--colour-hairline);
}

.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-stack);
  height: 80px;
}

.wordmark {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: color var(--transition-quick);
}

.wordmark:hover {
  color: var(--colour-accent);
}

.nav {
  display: flex;
  gap: var(--space-stack);
}

.actions {
  display: flex;
  gap: var(--space-stack);
}

.nav-link {
  font-size: var(--type-meta);
  color: var(--colour-text-secondary);
  margin-bottom: -2px;
  border-bottom: 2px solid transparent;
  transition:
      color var(--transition-quick),
      border-color var(--transition-quick);
}

.nav-link:hover {
  color: var(--colour-text-primary);
  border-bottom-color: var(--colour-hairline);
}

.nav-link.router-link-active {
  color: var(--colour-text-primary);
  border-bottom-color: var(--colour-accent);
}

.search-icon {
  margin-bottom: -10px;
  border-bottom: none;
}

/* MOBILE BUTTON */

.mobile-menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--colour-text-primary);
  cursor: pointer;
}

/* FULLSCREEN MENU */

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: var(--colour-background);
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--colour-hairline);
}

.mobile-menu-content {
  padding-top: 2rem;
}

.mobile-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid var(--colour-hairline);

  font-size: clamp(1.5rem, 5vw, 2.75rem);
  line-height: 1.1;
  color: var(--colour-text-primary);

  transition: color var(--transition-quick);
}

.mobile-nav-link:hover {
  color: var(--colour-accent);
}

.mobile-nav-link.router-link-active {
  color: var(--colour-accent);
}

/* ANIMATION */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
      opacity 0.2s ease,
      transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* RESPONSIVE */

@media (max-width: 899px) {
  .desktop-nav,
  .desktop-actions {
    display: none;
  }

  .mobile-menu-button {
    display: flex;
  }
}
</style>