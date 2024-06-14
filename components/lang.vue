<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <article>
      <h2
        class="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-gray-400"
      >
        Ngôn ngữ lập trình
      </h2>
      <section
        class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8"
      >
        <div v-for="over in state.overviews">
          <article
            class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            :style="`background-image: url(${over.cover.external.url});`"
          >
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"
            ></div>
            <div
              class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
            >
              <h3 class="text-center">
                <NuxtLink
                  :to="`chi_tiet/${over.id}`"
                  class="text-white text-2xl font-bold text-center"
                  v-for="text in over.properties.Name.title"
                >
                  <span class="absolute inset-0"></span>
                  {{ text.plain_text }}
                </NuxtLink>
                <div >
                  <div class="inline-block relative py-1 text-xs">
                    <div class="absolute inset-0 text-red-200 flex">
                      <div class="flex-grow h-full bg-red-200 rounded-md"></div>
                    </div>
                    <span v-for="tag in over.properties.Tag.multi_select"
                      class="relative text-red-500 uppercase font-semibold p-2 m-1"
                    >
                      {{ tag.name }}
                    </span>
                  </div>
                </div>
              </h3>
            </div>
          </article>
        </div>
      </section>
    </article>
  </section>
</template>
<script setup>
const state = reactive({
  covers: [],
  overviews: [],
});

const res = await fetch("http://localhost:3000/api/lang");

res.json().then((data) => {
  state.overviews = data.langs;
});
</script>
