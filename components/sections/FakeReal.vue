<template>
  <section id="fakeReal" class="main-container py-20 relative z-10">
    <h2 class="flex justify-between"><span>fAke</span><span>reAl</span></h2>
    <p class="text-body-medium my-10">Западные медиа нередко фокусируются на таких кадрах, <br>
      формируя стереотипный и мрачный образ России.</p>
    <p class="text-body-medium ms-[15%]"> &nbsp;&nbsp;&nbsp;&nbsp;Но Россия – это и современные города, ухоженные парки, <br>
      уникальная архитектура и динамичная повседневная жизнь.</p>
    <div class="grid grid-cols-12 grid-rows-8 gap-10 mt-10">
      <div class="col-span-3 row-span-3">
        <NuxtImg src="/images/fake/1.jpg"/>
      </div>
      <div class="col-span-3 row-span-5 col-start-1 row-start-4">
        <NuxtImg src="/images/fake/2.jpg"/>
      </div>
      <div class="col-span-2 row-span-5 col-start-4 row-start-2">
        <NuxtImg src="/images/fake/3.jpg"/>
      </div>
      <div class="col-span-3 row-span-5 col-start-8 row-start-1">
        <NuxtImg src="/images/fake/4.jpg"/>
      </div>
      <div class="col-span-2 row-span-5 col-start-11 row-start-1">
        <NuxtImg src="/images/fake/5.jpg"/>
      </div>
      <div class="col-span-4 row-span-3 col-start-9 row-start-6">
        <NuxtImg src="/images/fake/6.jpg"/>
      </div>
    </div>
    <div class="w-full text-center absolute left-0  bottom-[23.5rem]  flex items-center">
      <p class="vs w-full">vs</p>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>