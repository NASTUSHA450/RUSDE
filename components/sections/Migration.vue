<template>
  <div id="migration">
    <div>
      <NuxtImg src="/images/germany.svg" class="germany" />
    </div>
    <div class="plane-block">
      <NuxtImg src="/images/plane.png" class="plane" />
      <div class="card-grid">
        <div v-for="(point,idx) in points" :class="['flex cards',{'justify-end':idx === 0},{'justify-end':idx === 2},{'justify-end':idx === 4}]">
          <div class="card">
            <NuxtImg class="mr-4 w-[24px]" :src="`/images/migration/${point.icon}.png`" />
            <div class="text-body-medium">
              <p class="font-bold">{{point.title}}</p>
              <p>{{point.text}}</p>
            </div>
          </div>

        </div>
      </div>
      <div class="vertical-line absolute -top-52 me-11"></div>
    </div>
    <div>
      <NuxtImg src="/images/russia.svg" class="russia" />
    </div>
  </div>
</template>
<script setup lang="ts">
const points = [
  {icon:'1', title:'Визовая поддержка', text:'От сбора документов до получения.'},
  {icon:'2', title:'Подбор жилья по вашим запросам', text:'Проверенные варианты аренды и покупки.'},
  {icon:'3', title:'Помощь в адаптации', text:'Открытие счета, соц. интеграция, бытовые вопросы.'},
  {icon:'4', title:'Персональный менеджер', text:'Ваша поддержка на всех этапах.'},
  {icon:'5', title:'Юридическое сопровождение', text:'Регистрация, ВНЖ, гражданство.'},

]
</script>