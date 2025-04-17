<template>
  <section id="offer">
    <div class="section-text">
      <h2>что мы <br> <span>предлагаем?</span></h2>
      <p class="description">Россия – страна уникальных возможностей и
        контрастов, привлекающая людей со всего мира. Кто-то ищет здесь карьерные перспективы в развивающихся отраслях,
        кто-то воссоединяется с семьей или находит уникальную культурную среду. Другие видят потенциал для бизнеса или
        просто желают сменить обстановку на более размеренную или, наоборот, динамичную жизнь в мегаполисе.</p>
      <div class="points">
        <h3>Наши услуги предназначены для</h3>
        <div v-for="(item,idx) in offerPoints" :key="idx" class="point">
          <NuxtImg :src="`/images/offer/icons/${item.icon}.svg`"/>
          <p v-html="item.name"></p>
        </div>
        <p>Мы помогаем сделать ваш переход максимально гладким, независимо от ваших целей.</p>
      </div>
    </div>
    <div class="section-images ">
      <div class="offer-1">
      </div>
      <div class="offer-2">
      </div>
      <div class="offer-3">
      </div>
      <div class="button">
        <button @click="store.toggleFormModal()"
                class=""><span class="text-body-medium">Получить консультацию</span>
          <NuxtImg src="/images/icons/arrow-right.svg" class="w-fit h-[11px]"/>
        </button>
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">
const offerPoints = [
  {icon: '1', name:`<span>Специалистов и профессионалов,</span> ищущих работу или развитие карьеры.`},
  {icon: '2', name:`<span>Предпринимателей,</span> планирующих открыть или релоцировать бизнес.`},
  {icon: '3', name:`<span>Семей,</span> желающих переехать для воссоединения или в поисках комфортной среды для жизни и воспитания детей.`},
  {icon: '4', name:`<span>Людей,</span> ищущих перемен, готовых к новому опыту и культурному погружению.`},
]
import { useStore } from '~/store/store';
const store = useStore();
</script>