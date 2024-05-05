<script setup lang="ts">
defineSlots<{
  default: () => any
}>();
</script>

<template>
  <div>
    <aside>
      <PrintIconBook />
    </aside>
    <slot />
  </div>
</template>
