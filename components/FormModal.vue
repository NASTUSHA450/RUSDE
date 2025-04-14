<template>
  <div v-if="!openFormModal" class="open-form-container">
    <button  @click="openFormModal = true" :class="['open-form', ui.footerVisible ? 'text-black bg-white' : (ui.formOverWhite ? 'text-white bg-black' : ' text-black bg-white')]">Оставить заявку</button>
  </div>

  <div id="formModal" v-if="openFormModal">
    <div class="dialog">
      <div @click="openFormModal = false" class="dialog-backdrop"></div>
      <div class="dialog-content">
        <p class="text-body-large font-bold mb-3">Оставить заявку</p>
        <p class="text-body-medium">Поможем с переездом быстро и без лишних забот! Оставьте заявку, и наш специалист
          свяжется с вами в ближайшее время.</p>
        <Form />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Form from '@/components/Form.vue'
import { useUIStore } from '@/store/ui'
const ui = useUIStore()

const openFormModal = ref(false)
</script>