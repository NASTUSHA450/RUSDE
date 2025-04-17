<template>
  <FormKit type="form" @submit="handleSubmit" :actions="false">
    <div class="toast">
      <FormKitMessages />
    </div>
    <FormKit
        type="text"
        name="name"
        id="name"
        :validation="[['required'], ['matches', /^[a-zA-Zа-яёА-ЯЁ\s]+$/]]"
        placeholder="Имя"
        validation-visibility="submit"
        :classes="{
            outer: 'mt-4 sm:mt-7 xl:mt-10 mb-4 relative xl:w-auto w-full',
          }"
        :validation-messages="{
              required: 'Имя обязательно',
              matches: 'Имя не должно содержать цифры и символы',
            }"
    />
    <FormKit
        type="text"
        placeholder="Номер телефона"
        :validation="[
          ['required'],
        ]"
        v-maska="'### ### ####'"
        validation-visibility="submit"
        :classes="{
            outer: 'mb-5 sm:mb-7 xl:mb-10 relative  xl:w-auto w-full',
            wrapper: 'number relative'
          }"
        :validation-messages="{
              required: 'Номер телефона обязателен',
              matches: 'Номер телефона не заполнен корректно',
            }"
    />
    <FormKit
        type="checkbox"
        name="acceptTerms"
        validation="required"
        :classes="{
            outer: 'relative checkbox',
            wrapper: 'flex',
            input: 'relative',
            inner: isFooter ? 'rounded-full mr-4 w-5 h-5 sm:w-[22px] sm:h-[22px] xl:w-7 xl:h-7' :'rounded-full mr-4 w-5 h-5 sm:w-[22px] sm:h-[22px] xl:w-7 xl:h-7 sm:mt-2 ml-0.5'
          }"
        :validation-messages="{
              required: 'Примите условия политики конфиденциальности'
           }"
    >
      <template #label>
        <div class="text-body-medium sm:mt-0 xs:mt-1">
          Я соглашаюсь с
          <a href="#" class="underline underline-offset-2"> политикой обработки <br v-if="!isFooter" class="hidden sm:inline"> персональных данных </a>
        </div>
      </template>
    </FormKit>
    <FormKit type="submit" :label="isFooter? 'Отправить заявку':'Отправить'" :classes="{
            input: isFooter ? 'button-white ':'button-black',
            wrapper: isFooter ? 'button-footer':'bg-black rounded-lg mt-4'
          }"/>
  </FormKit>
</template>
<script setup lang="ts">
const showMessage = ref(true)
import { FormKitMessages } from '@formkit/vue'
const props = defineProps({
  currentClass: String,
})
const emit = defineEmits<{
  (e: 'submit', payload: Record<string, any>): void
}>()
const handleSubmit = (data: Record<string, any>) => {
  emit('submit', data)
}

const isFooter = props.currentClass === 'footer'
</script>
<style scoped>
.toast {
  display: none;
}
</style>
