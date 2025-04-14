<script setup>
const handleSubmit = (data) => {
  alert('Форма отправлена!');
  console.log('Данные формы:', data);
}
</script>

<template>
  <FormKit type="form" @submit="handleSubmit" :actions="false">
    <FormKit type="text" name="name" label="Имя" validation="required" />
    <FormKit type="checkbox" name="accept" label="Согласен" validation="required" />
    <FormKit type="submit" label="Отправить" />
  </FormKit>
</template>