<template>
  <!--header-->
  <header class="bg-white fixed top-0 left-0 right-0 z-20 shadow-md">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <NuxtLink class="block text-black-600" to="/">
            <span class="sr-only">Home</span>
             Noob - 404NFP
          </NuxtLink>
        </div>

        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <NuxtLink to="/overview" class="text-gray-500 transition hover:text-gray-500/75" href="#"> Tổng quan </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/csdl" class="text-gray-500 transition hover:text-gray-500/75" href="#"> Cơ sở dữ liệu </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/fe" class="text-gray-500 transition hover:text-gray-500/75" href="#"> Frontend </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/be" class="text-gray-500 transition hover:text-gray-500/75" href="#"> Backend </NuxtLink>
              </li> 
            </ul>
          </nav>      
        </div>
      </div>
    </div>
  </header>

  <div style="background-image: url('https://mixivivu.com/section-background.png')" class="mt-8 md:mt-10">
    <!--say hi-->
    <header class="">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-center sm:text-left">
            <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">👋 Chào mọi người</h1>
            <p class="mt-1.5 text-sm text-gray-500">Tôi là noob đơn giản chỉ là lập trình website bình thường.
              Đây là nơi tôi lữu lại những tài liệu tôi thấy hay, những kiến thức tôi đã, từng và đang dùng.
              Thân ái, một ngày tốt lành cho mọi người. 🎉</p>
          </div>
        </div>
      </div>
    </header>

    <!--views-->
    <div class="container mx-auto p-2 md:p-6">
      <slot />
    </div>

  </div>

  <!--footer-->
  <footer>
    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <p class="text-xs text-gray-500">&copy; 2024. Noob - 404NFP</p>
    </div>
  </footer>

</template>

<script lang="ts" setup>

</script>

<style></style>