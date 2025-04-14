<template>
  <section id="offer">
    <div class="section-text">
      <h2 class="col-span-6 row-span-1">что мы <br> <span class="ms-[26%]">предлагаем?</span></h2>
      <p class="text-body-medium col-span-5 row-span-1 row-start-2 py-10">Россия – страна уникальных возможностей и
        контрастов, привлекающая людей со всего мира. Кто-то ищет здесь карьерные перспективы в развивающихся отраслях,
        кто-то воссоединяется с семьей или находит уникальную культурную среду. Другие видят потенциал для бизнеса или
        просто желают сменить обстановку на более размеренную или, наоборот, динамичную жизнь в мегаполисе.</p>
      <div class="text-body-medium col-span-4 row-span-1 col-start-3 row-start-3 points">
        <h3 class="font-bold">Наши услуги предназначены для</h3>
        <div v-for="(item,idx) in offerPoints" :key="idx" class="point">
          <NuxtImg :src="`/images/offer/icons/${item.icon}.svg`"/>
          <p>{{ item.name }}</p>
        </div>
        <p>Мы помогаем сделать ваш переход максимально гладким, независимо от ваших целей.</p>
      </div>
    </div>
    <div class="section-images mt-6 relative">
      <div class="col-span-3 row-span-3 col-start-3 flex items-end">
        <NuxtImg src="/images/offer/2.jpg"/>
      </div>
      <div class="col-span-3 row-span-3 col-start-3 row-start-4">
        <NuxtImg src="/images/offer/3.jpg"/>
      </div>
      <div class="col-span-2 row-span-6 col-start-1 row-start-3 mt-2">
        <NuxtImg src="/images/offer/1.jpg"/>
      </div>
      <button
          class="button-gray px-5 py-3 absolute bottom-[3.2rem] w-[280px] right-0 flex justify-between items-center text-nowrap">
        Получить консультацию
        <NuxtImg src="/images/icons/arrow-right.svg" class="h-[11px]"/>
      </button>
    </div>
  </section>
</template>


<script setup lang="ts">
const offerPoints = [
  {icon: '1', name:'Специалистов и профессионалов, ищущих работу или развитие карьеры.'},
  {icon: '2', name:'Предпринимателей, планирующих открыть или релоцировать бизнес.'},
  {icon: '3', name:'Семей, желающих переехать для воссоединения или в поисках комфортной среды для жизни и воспитания детей.'},
  {icon: '4', name:'Людей, ищущих перемен, готовых к новому опыту и культурному погружению.'},
]

</script>