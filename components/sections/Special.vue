<template>
  <section id="special">
    <div class="section-text">
      <h2 class="col-span-6 row-span-1">
        особые <br>
        <span class="ms-[11%]">экономические</span> <br>
        <span>зоны</span>
      </h2>
      <p class="text-body-medium col-span-5 row-span-1 row-start-2 py-10">Россия активно развивает Особые Экономические Зоны – территории с особым юридическим статусом и льготными экономическими условиями для предпринимателей и инвесторов. Переезд в Россию может стать вашим стратегическим шагом для роста бизнеса.</p>
      <div class="text-body-medium col-span-4 row-span-1 col-start-3 row-start-3 points">
        <h3 class="font-bold">Ключевые преимущества СЭЗ</h3>
        <div v-for="(item,idx) in points" :key="idx" class="point">
          <NuxtImg :src="`/images/special/icons/${item.icon}.svg`"/>
          <p>{{ item.name }}</p>
        </div>
        <p>Мы помогаем сделать ваш переход максимально гладким, независимо от ваших целей.</p>
      </div>
    </div>
    <div class="section-images mt-3.5 relative">
      <div class="col-span-2 row-span-5 flex items-center">
        <NuxtImg src="/images/special/1.jpg"/>
      </div>
      <div class="col-span-3 row-span-3 col-start-3 row-start-3 mt-3.5">
        <NuxtImg src="/images/special/2.jpg"/>
      </div>
      <div class="col-span-4 row-span-3 row-start-6 relative bottom-[4.45rem]">
        <NuxtImg src="/images/special/3.jpg"/>
      </div>
      <button
          class="button-gray px-5 py-3 absolute top-[4.5rem] w-[195px] right-0 flex justify-between items-center text-nowrap">
        Узнать больше
        <NuxtImg src="/images/icons/arrow-right.svg" class="h-[11px]"/>
      </button>
    </div>
  </section>
</template>


<script setup lang="ts">
const points = [
  {icon: '1', name:'Налоговые льготы: Cниженные ставки по налогу на прибыль, имущество, землю, транспортному налогу.'},
  {icon: '2', name:'Упрощенные административные процедуры: Принцип "одного окна", ускоренное получение разрешений.'},
  {icon: '3', name:'Таможенные преференции: Режим свободной таможенной зоны (освобождение от пошлин и НДС на ввозимое оборудование и сырье).'},
  {icon: '4', name:'Готовая инфраструктура: Доступ к промышленным площадкам, коммуникациям, логистическим центрам.'},
]

</script>