<template>
  <div class="flex flex-col items-center">
    <Header />
    <Preview />
    <FormModal />
    <div ref="headerMarker" class="header-marker"></div>
    <Main />
    <div ref="footerRef" class="w-full">
      <Footer />
    </div>
  </div>

</template>
<script setup lang="ts">
import Header from './components/Header.vue';
import Preview from './components/Preview.vue';
import FormModal from './components/FormModal.vue';

import Main from './components/Main.vue'
import Footer from "~/components/Footer.vue";
import { useUIStore } from '@/store/ui'

const ui = useUIStore()

// ref для маркера переключения цвета меню (header)
const headerMarker = ref<HTMLElement | null>(null)
// ref для футера
const footerRef = ref<HTMLElement | null>(null)

let headerObserver: IntersectionObserver | null = null
let footerObserver: IntersectionObserver | null = null

onMounted(() => {

  headerObserver = new IntersectionObserver((entries) => {
    ui.headerInView = entries.some(entry => entry.isIntersecting)
  }, { threshold: 0 })
  if (headerMarker.value) {
    headerObserver.observe(headerMarker.value)
  }

  footerObserver = new IntersectionObserver((entries) => {
    ui.footerVisible = entries.some(entry => entry.isIntersecting)
  }, { threshold: 0.9 })

  if (footerRef.value) {
    footerObserver.observe(footerRef.value)
  }
})

onUnmounted(() => {
  if (footerRef.value && footerObserver) {
    footerObserver.unobserve(footerRef.value)
    footerObserver.disconnect()
  }
})
</script>
<style scoped>
.header-marker {
  height: 1px;
  position: relative;
  top: -10px;
  pointer-events: none;
  opacity: 0;
}
</style>
