<template>
  <div id="footer">
    <div class="footer-content">
      <h2 class="white-text-hover">готовы начать <br class="xl:hidden"> ваш <br class="hidden xl:inline"> путь в <br class="sm:hidden"> россию?</h2>
      <Form :current-class="'footer'" @submit="handleFormSubmit" />
      <div class="flex justify-between xl:items-center mt-4 xl:mt-[4.6rem] items-end">
        <a @click="store.scrollToTop()" class=" hidden sm:inline-block"><NuxtImg src="/images/icons/logo.svg" alt="Переезд в Россию" title="Переезд в Россию" class="logo" /></a>

        <ul class="menu white-text-hover ms-0 gap-20">
          <li v-for="(item,idx) in menuItems" :key="idx">
            <a href="#" @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
          </li>
        </ul>
        <ul class="white-text-hover flex gap-3 sm:gap-4 flex-col text-body-medium xl:pe-0 sm:pe-20 xl:hidden">
          <li v-for="(item,idx) in visibleMenuItems" :key="idx">
            <a href="#" @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
          </li>
        </ul>
        <ul class="white-text-hover gap-3 sm:gap-4 flex flex-col text-body-medium xl:pe-0 pe-20 xl:hidden">
          <li v-for="(item,idx) in hiddenMenuItems" :key="idx">
            <a href="#" @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
          </li>
        </ul>
        <div class=" gap-4  hidden sm:flex">
          <a v-for="(item, idx) in socials" :key="idx" href="#">
            <NuxtImg :src="`/images/icons/${item.name}.svg`" class="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]" />
          </a>
        </div>
      </div>
      <div class="flex items-center justify-between pt-14 sm:hidden">
        <a href="#" @click="store.scrollToTop()"><NuxtImg src="/images/icons/logo.svg" alt="Переезд в Россию" title="Переезд в Россию" class="logo" /></a>
        <div class=" gap-4 flex">
          <a v-for="(item, idx) in socials" :key="idx" href="#">
            <NuxtImg :src="`/images/icons/${item.name}.svg`" class="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]" />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import Form from "~/components/Form.vue";

import {useStore} from '~/store/store';

const store = useStore();

const menuItems = [
  {name:"Что мы предлагаем?", link:"#offer"},
  {name:"ОЭЗ", link:"#special"},
  {name:"Комфорт", link:"#comfort"},
  {name:"Отдых", link:"#active"},
  {name:"Безопасность", link:"#safe"},
  {name:"Пакеты услуг", link:"#package"},
  {name:"Fake VS Real", link:"#fakeReal"},
]
const visibleMenuItems = computed(() => menuItems.slice(0, -3))
const hiddenMenuItems = computed(() => menuItems.slice(-3))

const socials = [
  {name:'insta', link:'#'},
  {name:'vk', link:'#'},
  {name:'tg', link:'#'},
]
function scrollToSection(id:string) {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
const handleFormSubmit = (formData) => {
  store.openFormModal = true
  store.toggleFormSubmit()
}

</script>