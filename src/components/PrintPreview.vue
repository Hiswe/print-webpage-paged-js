<script setup lang="ts">
import { Handler, Previewer } from 'pagedjs';

defineSlots<{
  default: () => any
}>();

const contentRef = ref<HTMLElement>();
const bookContentRef = ref<HTMLElement>();
const isOnPreview = ref(false);

function onWebVersion() {
  if (bookContentRef.value == null) return;
  bookContentRef.value.innerHTML = ``;
  isOnPreview.value = false;
}

function onPrintPreview() {
  if (contentRef.value == null || bookContentRef.value == null) return;
  const content = contentRef.value.innerHTML;
  bookContentRef.value.innerHTML = ``;
  const previewer = new Previewer();
  previewer.preview(
    content,
    // We need to keep css from public directory :(
    // importing with ?url will return an URL to a JS file :(
    [`style-print.css`],
    bookContentRef.value,
  );
  isOnPreview.value = true;
  return previewer;
}

function onPrint() {
  if (isOnPreview.value) return window.print(); ;
  const previewer = onPrintPreview();
  if (!previewer) return;
  previewer.registerHandlers(
    class PreviewHandler extends Handler {
      afterPreview() {
        window.print();
      }
    },
  );
}
</script>

<template>
  <div>
    <aside class="fixed top-4 end-4 print:hidden">
      <ul class="flex flex-col gap-4">
        <li class="flex flex-row-reverse items-center gap-2">
          <button class="peer rounded-2 border border-3 bg-white text-indigo hover:text-indigo-8 border-current p-1" @click="onWebVersion">
            <PrintIconScreen class="size-8" />
          </button>
          <span class="hidden peer-hover:block text-indigo-8 font-semibold">version numérique</span>
        </li>
        <li class="flex flex-row-reverse items-center gap-2">
          <button class="peer rounded-2 border border-3 bg-white text-indigo hover:text-indigo-8 border-current p-1" @click="onPrintPreview">
            <PrintIconBook class="size-8" />
          </button>
          <span class="hidden peer-hover:block text-indigo-8 font-semibold">aperçu impression</span>
        </li>
        <li class="flex flex-row-reverse items-center gap-2">
          <button class="peer rounded-2 border border-3 bg-white text-indigo hover:text-indigo-8 border-current p-1">
            <PrintIconPrinter class="size-8" @click="onPrint" />
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
