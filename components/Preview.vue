<template>
  <section id="preview">
    <div class="main-container w-full flex flex-col sm:justify-start justify-end sm:mb-0 mb-4">
      <h1>переезд <br> в россию</h1>
      <p>Ваш надежный партнер по планированию и реализации переезда в Россию. Мы предлагаем <br class="hidden xl:inline"> всестороннюю поддержку, упрощенные процессы и доступ к эксклюзивным возможностям, включая <br> Специальные Экономические Зоны.</p>
      <button @click="store.toggleFormModal()" class="button-white px-20 sm:w-fit w-full">Узнать больше</button>
      <div class="arrow">
        <NuxtImg src="/images/icons/arrow-down.svg" alt="Пролистайте вниз" title="Пролистайте вниз" class="w-[55px] h-[55px]" />
      </div>
    </div>

  </section>
</template>
<script setup lang="ts">
import { useStore } from '~/store/store';
const store = useStore();
</script>