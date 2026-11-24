<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  label: { type: String, required: true },
  active: { type: Boolean, default: false },
  to: { type: String, default: '' },
})
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="['chip', { 'chip--active': active }]">
    {{ label }}
  </RouterLink>
  <span v-else :class="['chip', { 'chip--active': active }]">{{ label }}</span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 14px;
  border: 1px solid var(--colour-hairline);
  border-radius: var(--radius-chip);
  font-size: 12px;
  line-height: 16px;
  color: var(--colour-text-secondary);
  white-space: nowrap;
  transition: border-color var(--transition-quick);
}

.chip--active {
  border-color: transparent;
  background: var(--colour-accent);
  color: var(--colour-on-accent);
}

.chip:hover {
  border-color: var(--colour-text-secondary);
}

.chip--active:hover {
  border-color: transparent;
}
</style>
