<template>
  <nav id="header" :class="ui.headerInView ? '' : 'bg-white'" >
    <div class="header-content">
      <svg class="w-[27px] sm:w-[32px] h-auto" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.75 10.5C4.96333 10.5 0.25 15.19 0.25 21V2.8C3.33 1.00333 6.92333 0 10.75 0C22.3467 0 31.75 9.40333 31.75 21H21.25C21.25 15.19 16.56 10.5 10.75 10.5Z" :fill="ui.headerInView ? 'white' : 'black'"/>
        <path d="M21.25 31.5C27.0367 31.5 31.75 26.81 31.75 21V39.2C28.67 40.9967 25.0767 42 21.25 42C9.65333 42 0.25 32.5967 0.25 21H10.75C10.75 26.7867 15.44 31.5 21.25 31.5Z" :fill="ui.headerInView ? 'white' : 'black'"/>
      </svg>
      <ul>
        <li v-for="(item,idx) in menuItems" :key="idx" :class="[
        ui.headerInView ? 'white-text-hover' : 'black-text-hover',
        (idx === 1 || idx === 3) ? 'capitalize' : ''
          ]">
          <a href="#" @click.prevent="scrollToSection(item.link)">{{ item.name }}</a>
        </li>
      </ul>
      <div class="buttons">
        <button class="px-5 hidden sm:inline" @click="store.toggleFormModal()" :class="ui.headerInView ? 'white-text-hover' : 'black-text-hover'">Оставить заявку</button>
        <div class="lang" >
          <div class="flex cursor-pointer" @click="openLanguageDropdown = true">
            <svg  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" mr-2 sm:w-[18px] w-[22px]">
              <path d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1225 6.84588 16.2657 4.78069 14.7425 3.2575C13.2193 1.7343 11.1541 0.877481 9 0.875ZM15.8453 8.375H12.7336C12.5938 5.52266 11.4953 3.50547 10.5945 2.3125C11.9932 2.64837 13.2516 3.41357 14.1934 4.50079C15.1352 5.58802 15.7131 6.94274 15.8461 8.375H15.8453ZM6.51797 9.625H11.482C11.3016 12.8758 9.74532 14.868 9 15.6406C8.25391 14.8672 6.69844 12.875 6.51797 9.625ZM6.51797 8.375C6.69844 5.12422 8.25469 3.13203 9 2.35938C9.7461 3.13516 11.3016 5.12734 11.482 8.375H6.51797ZM7.40547 2.3125C6.50469 3.50547 5.40625 5.52266 5.26641 8.375H2.15391C2.28687 6.94274 2.86477 5.58802 3.80657 4.50079C4.74836 3.41357 6.00682 2.64837 7.40547 2.3125ZM2.15391 9.625H5.26641C5.4086 12.4773 6.50469 14.4945 7.40547 15.6875C6.00682 15.3516 4.74836 14.5864 3.80657 13.4992C2.86477 12.412 2.28687 11.0573 2.15391 9.625ZM10.5914 15.6875C11.4922 14.4945 12.5883 12.4773 12.7305 9.625H15.843C15.7102 11.0568 15.1328 12.4113 14.1916 13.4984C13.2504 14.5856 11.9926 15.3511 10.5945 15.6875H10.5914Z" :fill="ui.headerInView ? 'white' : 'black'"/>
            </svg>
            <span :class="ui.headerInView ? 'white-text-hover' : 'black-text-hover'" class="hidden sm:inline">{{ selectedLanguage }}</span>
          </div>

          <Transition name="fade">
            <div ref="target" v-if="openLanguageDropdown" id="langChoice">
            <div v-for="(lang,idx) in filteredLanguages" :key="idx" class="language cursor-pointer" @click="selectLanguage(lang)">
              <NuxtImg :src="`/images/icons/${lang.icon}.svg`" :alt="lang.name" class="w-5 mr-4" /> <span>{{lang.name}}</span>
            </div>
          </div>
          </Transition>
        </div>
        <button @click="openMobileMenu = true" class="xl:hidden mr-2">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z"  :fill="ui.headerInView ? 'white' : 'black'"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <Transition name="fade">
  <div id="mobileMenu" v-if="openMobileMenu">
    <div @click="openMobileMenu = false" class="flex justify-end cursor-pointer">
      <NuxtImg src="/images/icons/close.svg" class="h-[15px] w-[15px]" />
    </div>
    <TransitionGroup name="fade-stagger" tag="ul" appear>
      <li v-for="(item,idx) in menuItems" :key="idx" :style="{ transitionDelay: `${idx * 100}ms` }">
        <a href="#" @click.prevent="chooseSection(item.link)">{{ item.name }}</a>
      </li>
    </TransitionGroup>
    <div class="flex mt-[15.5vh] justify-center gap-4">
      <a v-for="(item, idx) in socials" :key="idx">
        <NuxtImg :src="`/images/icons/${item.name}.svg`" class="w-[24px] h-[24px] xl:w-[32px] xl:h-[32px]" />
      </a>
    </div>
  </div>
  </Transition>

</template>
<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
import { useUIStore } from '@/store/ui'
const ui = useUIStore()
import { useStore } from '~/store/store';
const store = useStore();
import { watch } from 'vue'

const target = useTemplateRef<HTMLElement>('target')
onClickOutside(target, event => {
  openLanguageDropdown.value = false
})
const openMobileMenu = ref(false)
const menuItems = [
  {name:"Что мы предлагаем?", link:"#offer"},
  {name:"oЭЗ", link:"#special"},
  {name:"Комфорт", link:"#comfort"},
  {name:"oтдых", link:"#active"},
  {name:"Безопасность", link:"#safe"},
  {name:"Пакеты услуг", link:"#package"},
  {name:"Fake VS Real", link:"#fakeReal"},
]
const socials = [
  {name:'insta-bl', link:'#'},
  {name:'vk-bl', link:'#'},
  {name:'tg-bl', link:'#'},
]

const openLanguageDropdown = ref(false)
const selectedLanguage =  ref('Русский')
const languages = [
  {key:'ru',name:'Русский',icon:'rus-flag'},
  {key:'en',name:'Английский',icon:'britan-flag'},
  {key:'de',name:'Немецкий',icon:'de-flag'},
]
const filteredLanguages = computed(() => {
  return languages.filter(language => language.name !== selectedLanguage.value)
})
const selectLanguage = (lang:any) =>{
  selectedLanguage.value = lang.name
  openLanguageDropdown.value =  false
}

function scrollToSection(id: string, offset = 50) {
  const el = document.querySelector(id)
  if (el) {
    const top = (el as HTMLElement).offsetTop - offset
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
}
watch(openMobileMenu, (val) => {
  if (val) {
    document.body.classList.add('h-screen')
  } else {
    document.body.classList.remove('h-screen')
  }
})

const chooseSection = (link:string) =>{
  openMobileMenu.value = false
  setTimeout(() => {
    scrollToSection(link)
  }, 200)
}
</script>