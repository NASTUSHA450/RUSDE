<template>
  <div id="footer">
    <h2 class="text-white">готовы начать ваш <br> путь в россию?</h2>
    <Form :current-class="'footer'" />
  </div>
</template>
<script setup lang="ts">
import Form from "~/components/Form.vue";
</script>