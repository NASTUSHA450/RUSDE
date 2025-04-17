<template>
  <section id="safe">
    <div class="section-images relative flip">
      <div class="safe-1"></div>
      <div class="safe-2"></div>
      <div class="safe-3"></div>
      <button @click="store.toggleFormModal()" class="flex button-gray row-start-7 h-fit col-span-4 text-nowrap justify-center items-center sm:hidden text-sm font-bold gap-3">
        Узнать больше
        <NuxtImg src="/images/icons/arrow-right.svg" class="h-[11px] w-fit"/>
      </button>
    </div>
    <div class="section-text flip">
      <h2 class="">
        безопасность
      </h2>
      <p class="description">Мы понимаем ваши вопросы о безопасности. Вопреки стереотипам, Россия предлагает стабильную и безопасную среду для жизни. Низкий уровень уличной преступности во многих регионах позволяет вам и вашей семье чувствовать себя уверенно. Государство обеспечивает правопорядок и создает комфортные условия для жизни. Мы поможем подобрать район, соответствующий вашим ожиданиям по безопасности и комфорту.</p>
      <button @click="store.toggleFormModal()">
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