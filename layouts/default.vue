<template>
  <div>
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
                  <NuxtLink
                    to="/tong_quan"
                    class="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Tổng quan
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/co_so_du_lieu"
                    class="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Cơ sở dữ liệu
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/ngon_ngu_lap_trinh"
                    class="text-gray-500 transition hover:text-gray-500/75"
                  >
                   Ngôn ngữ lập trình
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/frontend"
                    class="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Frontend
                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                    to="/backend"
                    class="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Backend
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    
    <div class="container mx-auto p-2 md:p-6 mt-10" >
    <slot />
    </div>

    <footer>
      <div
        class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
      >
        <p class="text-xs text-gray-500">&copy; 2024. Noob - 404NFP</p>
      </div>
    </footer>

  </div>
</template>

<script setup></script>
