<template>
  <section id="special">
    <div class="section-text">
      <h2>
        особые <br>
        <span class="ms-[2%] xxs:ms-[10%] sm:ms-[15%] xl:ms-[11%]">экономические</span> <br>
        <span class="ms-[65%] xxs:ms-[70%] sm:ms-[35.5%] xl:ms-0">зоны</span>
      </h2>
      <p class="description">Россия активно развивает Особые Экономические Зоны – территории с особым юридическим статусом и льготными экономическими условиями для предпринимателей и инвесторов. Переезд в Россию может стать вашим стратегическим шагом для роста бизнеса.</p>
      <div class="points">
        <h3 class="font-bold ">Ключевые преимущества СЭЗ</h3>
        <div v-for="(item,idx) in points" :key="idx" class="point">
          <NuxtImg :src="`/images/special/icons/${item.icon}.svg`"/>
          <p v-html="item.name"></p>
        </div>
      </div>
    </div>
    <div class="section-images">
      <div class=" special-1">
      </div>
      <div class="special-2">
      </div>
      <div class="special-3">
      </div>
      <div class="button">
        <button  @click="store.toggleFormModal()"
                 class="">
         <span class="text-body-medium">Узнать больше</span>
          <NuxtImg src="/images/icons/arrow-right.svg" class="h-[11px] w-fit"/>
        </button>
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">
const points = [
  {icon: '1', name:`<span>Налоговые льготы</span>: Cниженные ставки по налогу на прибыль, имущество, землю, транспортному налогу.`},
  {icon: '2', name:`<span>Упрощенные административные процедуры</span>: Принцип "одного окна", ускоренное получение разрешений.`},
  {icon: '3', name:`<span>Таможенные преференции</span>: Режим свободной таможенной зоны (освобождение от пошлин и НДС на ввозимое оборудование и сырье).`},
  {icon: '4', name:`<span>Готовая инфраструктура</span>: Доступ к промышленным площадкам, коммуникациям, логистическим центрам.`},
]
import { useStore } from '~/store/store';
const store = useStore();

</script>