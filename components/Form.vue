<template>
  <FormKit type="form" @submit="handleSubmit" :actions="false">
    <FormKit
        type="text"
        name="name"
        id="name"
        :validation="[['required'], ['matches', /^[a-zA-Zа-яёА-ЯЁ\s]+$/]]"
        placeholder="Имя"
        validation-visibility="submit"
        :classes="{
            outer: 'mt-10 mb-4',
          }"
        :validation-messages="{
              required: 'Имя обязательно',
              matches: 'Имя не должно содержать цифры и символы',
            }"
    />
    <FormKit
        type="text"
        placeholder="Номер телефона"
        v-maska="'+7 (###) ###-##-##'"
        :validation="[['required'], ['matches', /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/]]"
        validation-visibility="submit"
        :classes="{
            outer: 'mb-10',
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
            wrapper: 'flex',
            input: 'relative',
            inner: isFooter ? 'rounded-full mr-4 h-7 w-7 ' :'rounded-full mr-4 h-7 w-7 mt-2 ml-0.5'
          }"
        :validation-messages="{
              required: 'Примите условия политики конфиденциальности'
           }"
    >
      <template #label>
        <div class="text-body-medium">
          Я соглашаюсь с
          <a href="#" class="underline underline-offset-2"> политикой обработки <br v-if="!isFooter"> персональных данных </a>
        </div>
      </template>
    </FormKit>
    <FormKit type="submit" :label="isFooter? 'Отправить заявку':'Отправить'" :classes="{
            input: isFooter ? 'button-white':'button-black',
            wrapper: isFooter ? 'bg-white rounded-lg w-[230px]':'bg-black rounded-lg mt-4'
          }"/>
  </FormKit>
</template>
<script setup lang="ts">
const props = defineProps({
  currentClass: String,
})
const handleSubmit = (data: Record<string, any>) => {
  alert('Форма отправлена!');
  console.log('Данные формы:', data);
}

const isFooter = props.currentClass === 'footer'
</script>
