<template>
  <div v-if="!store.openFormModal" class="open-form-container">
    <button @click="store.toggleFormModal()"
            :class="['open-form', ui.footerVisible ? 'text-black bg-white hover:bg-[#E6E6E6] focus:bg-[#CCCCCC]' : (ui.formOverWhite ? 'text-white bg-black hover:bg-[#1A1A1A] focus:bg-[#333333]' : ' text-black bg-white hover:bg-[#E6E6E6] focus:bg-[#CCCCCC]')]">
      Оставить заявку
    </button>
  </div>
  <Transition name="fade">
    <div id="formModal" v-if="store.openFormModal || store.openFormSubmit">
      <div class="dialog">
        <div @click="store.toggleFormModal()" class="dialog-backdrop"></div>
        <div class="dialog-content">
          <div v-if="!store.openFormSubmit">
            <p class="text-body-large font-bold mb-3">Оставить заявку</p>
            <p class="text-body-medium">Поможем с переездом быстро и без лишних забот! Оставьте заявку, и наш специалист
              свяжется с вами в ближайшее время.</p>
            <Form @submit="handleFormSubmit"/>
          </div>
          <div v-else class="flex flex-col justify-center items-center fade-in">
            <div
                class="h-[87px] w-[87px] sm:h-[6.25rem] sm:w-[6.25rem] xl:w-40 xl:h-40 shadow-xl bg-form-submit bg-set rounded-full flex justify-center items-center mb-7">
              <NuxtImg src="/images/icons/fat-check.svg" class="h-[35px] sm:h-[3.5rem]  xl:h-[5.125rem]"/>
            </div>
            <p class="text-body-large font-bold mb-3">Спасибо!</p>
            <p class="text-body-medium text-center py-1">Ваша заявка отправлена. Мы свяжемся с вами в самые кратчайшие
              сроки.</p>
            <button class="button-black w-full mt-4" @click="store.toggleFormModal()">Отлично
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import Form from '@/components/Form.vue'
import {useUIStore} from '@/store/ui'

const ui = useUIStore()
import {useStore} from '~/store/store';
import {watch} from "vue";

const store = useStore();

const formSubmit = ref(false)
const handleFormSubmit = (formData) => {
  store.openFormSubmit = true
}
let scrollY = 0

watch(
    [() => store.openFormModal, store.openFormSubmit],
    ([openModal, isSubmitted]) => {
      if (openModal) {
        scrollY = window.scrollY

        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.style.width = '100%'
      } else {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''

        // Вернём пользователя на прежнюю позицию
        window.scrollTo(0, scrollY)
      }
    }
)

</script>
<style scoped>

</style>