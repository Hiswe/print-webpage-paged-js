<script setup lang="ts">
// import { Previewer } from 'https://unpkg.com/pagedjs@0.1.38/dist/paged.esm.js';
import { Handler, Previewer } from 'pagedjs';

defineSlots<{
  default: () => any
}>();

interface PreviewerClass {
  constructor: () => void
  preview: (content: string, cssFiles: Array<string>, element: HTMLElement) => void
}

const contentRef = ref<HTMLElement>();
const bookContentRef = ref<HTMLElement>();
const isOnPreview = ref(false);

function webVersion() {
  if (bookContentRef.value == null) return;
  bookContentRef.value.innerHTML = ``;
  isOnPreview.value = false;
}

function printPreview() {
  if (contentRef.value == null || bookContentRef.value == null) return;
  const content = contentRef.value.innerHTML;
  bookContentRef.value.innerHTML = ``;
  const previewer: PreviewerClass = new Previewer();
  previewer.preview(
    content,
    [`css/style-print.css`],
    bookContentRef.value,
  );
  isOnPreview.value = true;
}
</script>

<template>
  <div>
    <aside class="fixed top-4 end-4 print:hidden">
      <ul class="flex flex-col gap-4">
        <li class="flex flex-row-reverse items-center">
          <button class="peer rounded-2 border border-3 text-indigo hover:text-indigo-8 border-current p-1" @click="webVersion">
            <PrintIconScreen class="size-8" />
          </button>
          <span class="hidden peer-hover:block text-indigo-8 font-semibold">version numérique</span>
        </li>
        <li class="flex flex-row-reverse items-center">
          <button class="peer rounded-2 border border-3 text-indigo hover:text-indigo-8 border-current p-1" @click="printPreview">
            <PrintIconBook class="size-8" />
          </button>
          <span class="hidden peer-hover:block text-indigo-8 font-semibold">aperçu impression</span>
        </li>
        <li class="flex flex-row-reverse items-center">
          <button class="peer rounded-2 border border-3 text-indigo hover:text-indigo-8 border-current p-1">
            <PrintIconPrinter class="size-8" />
          </button>
          <span class="hidden peer-hover:block text-indigo-8 font-semibold">imprimer</span>
        </li>
      </ul>
    </aside>
    <div id="content" ref="contentRef" :class="{ hidden: isOnPreview }">
      <slot />
    </div>
    <div id="renderbook" ref="bookContentRef" class="empty:hidden" />
  </div>
</template>
