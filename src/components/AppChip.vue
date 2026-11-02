<script setup>
defineProps({
  label: { type: String, required: true },
  active: { type: Boolean, default: false },
})
</script>

<template>
  <span :class="['chip', { 'chip--active': active }]">{{ label }}</span>
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
}

.chip--active {
  border-color: transparent;
  background: var(--colour-accent);
  color: var(--colour-on-accent);
}
</style>
