<template>
  <main>
    <div ref="offer"><Offer /></div>
    <div ref="migration" class="lg:block hidden"><Migration /></div>
    <div ref="special"><Special /></div>
    <div ref="comfort"><Comfort /></div>
    <div ref="active"><Active /></div>
    <div ref="safety"><Safety /></div>
    <div ref="packageBlock"><Package /></div>
    <div ref="fake"><FakeReal /></div>
  </main>
</template>

<script setup lang="ts">
import Offer from "~/components/sections/Offer.vue";
import Migration from "./sections/Migration.vue";
import Special from "~/components/sections/Special.vue";
import Comfort from "~/components/sections/Comfort.vue";
import Active from "~/components/sections/Active.vue";
import Safety from "~/components/sections/Safety.vue";
import Package from "~/components/sections/Package.vue";
import FakeReal from "~/components/sections/FakeReal.vue";

import { ref, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '@/store/ui'

const ui = useUIStore()

// Отдельные ref-переменные для каждого DOM-элемента
const offer = ref<HTMLElement | null>(null)
const migration = ref<HTMLElement | null>(null)
const special = ref<HTMLElement | null>(null)
const comfort = ref<HTMLElement | null>(null)
const active = ref<HTMLElement | null>(null)
const safety = ref<HTMLElement | null>(null)
const packageBlock = ref<HTMLElement | null>(null)
const fake = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null
const visibleSections = new Set<Element>()

onMounted(() => {
  // Создаем наблюдатель
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        visibleSections.add(entry.target)
      } else {
        visibleSections.delete(entry.target)
      }
    }
    // Если хотя бы один элемент в зоне видимости — true
    ui.formOverWhite = visibleSections.size > 0
  }, { threshold: 0.3 })

  // Запускаем наблюдение за каждым элементом, если он существует
  if (offer.value) observer.observe(offer.value)
  if (migration.value) observer.observe(migration.value)
  if (special.value) observer.observe(special.value)
  if (comfort.value) observer.observe(comfort.value)
  if (active.value) observer.observe(active.value)
  if (safety.value) observer.observe(safety.value)
  if (packageBlock.value) observer.observe(packageBlock.value)
  if (fake.value) observer.observe(fake.value)
})

onUnmounted(() => {
  if (observer) {
    if (offer.value) observer.unobserve(offer.value)
    if (migration.value) observer.unobserve(migration.value)
    if (special.value) observer.unobserve(special.value)
    if (comfort.value) observer.unobserve(comfort.value)
    if (active.value) observer.unobserve(active.value)
    if (safety.value) observer.unobserve(safety.value)
    if (packageBlock.value) observer.unobserve(packageBlock.value)
    if (fake.value) observer.unobserve(fake.value)
    observer.disconnect()
  }
})
</script>