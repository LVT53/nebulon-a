<script setup>
defineProps({
  /** primary | secondary | ghost */
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button :type="type" :class="['btn', `btn--${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: var(--radius-control);
  font-family: var(--font-display);
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color var(--transition-quick),
    border-color var(--transition-quick),
    color var(--transition-quick);
}

.btn--primary {
  background: var(--colour-accent);
  color: var(--colour-on-accent);
}

.btn--primary:hover {
  background: var(--colour-accent-hover);
}

.btn--primary:active {
  background: var(--colour-accent-pressed);
}

.btn--secondary {
  background: var(--colour-surface);
  border-color: var(--colour-hairline);
  color: var(--colour-text-primary);
}

.btn--secondary:hover {
  background: var(--colour-surface-hover);
}

.btn--secondary:active {
  background: var(--colour-surface-pressed);
}

.btn--ghost {
  background: transparent;
  color: var(--colour-text-primary);
}

.btn--ghost:hover {
  background: var(--colour-surface);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
