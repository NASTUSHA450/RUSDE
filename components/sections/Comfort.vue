<template>
  <section id="comfort">
    <div class="section-images relative flip">
      <div class="comfort-1">
      </div>
      <div class="comfort-2">
      </div>
      <div class="comfort-3">
      </div>
    </div>
    <div class="section-text flip">
      <h2>
        <span class="sm:mr-0 mr-16"> ваш комфорт</span> <br>
        <span class="sm:mr-[20.5%] xl:mr-[95px]">наш приоритет</span>
      </h2>
      <p class="description">Переезд – это больше, чем просто смена адреса. Это погружение в новую культуру, язык, быт. Мы помогаем вам не просто переехать,
        а почувствовать себя в России как дома. Организуем языковые курсы, поможем с записью детей в школу или детский сад, подскажем лучшие места для досуга и познакомим с местным сообществом.</p>
      <button   @click="store.toggleFormModal()"
          class="">
        Узнать больше
        <NuxtImg src="/images/icons/arrow-right.svg" class="h-[11px]"/>
      </button>
    </div>


  </section>
</template>
<script setup lang="ts">
import { useStore } from '~/store/store';
const store = useStore();
</script>