<template>
  <div id="migration" class="main-container py-20">
    <div>
      <NuxtImg src="/images/germany.svg" class="h-[18.75rem]" />
    </div>
    <div class="flex justify-center relative mt-48 mb-32">
      <NuxtImg src="/images/plane.png" class="h-[16.5rem] w-auto relative z-10" />
      <div class="grid grid-cols-2 absolute -top-16 gap-x-72 gap-y-12">
        <div v-for="(point,idx) in points" :class="['flex cards',{'justify-end':idx === 0},{'justify-end':idx === 2},{'justify-end':idx === 4}]">
          <div class="card">
            <p class="mr-4 text-[30px]">{{point.icon}}</p>
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
      <NuxtImg src="/images/russia.svg" class="h-[20rem]" />
    </div>
  </div>
</template>
<script setup lang="ts">
const points = [
  {icon:'🛂', title:'Визовая поддержка', text:'От сбора документов до получения.'},
  {icon:'🔑', title:'Подбор жилья по вашим запросам', text:'Проверенные варианты аренды и покупки.'},
  {icon:'🤝🏻', title:'Помощь в адаптации', text:'Открытие счета, соц. интеграция, бытовые вопросы.'},
  {icon:'📞', title:'Персональный менеджер', text:'Ваша поддержка на всех этапах.'},
  {icon:'⚖️', title:'Юридическое сопровождение', text:'Регистрация, ВНЖ, гражданство.'},

]
</script>