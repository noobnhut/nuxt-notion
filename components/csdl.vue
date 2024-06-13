<template>
  <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-gray-400  dark:text-gray-200">
    Cơ sở dữ liệu
</h1>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 bg-white">
    <a class="block rounded-lg p-4 shadow-sm shadow-indigo-100 cursor-pointer hover:opacity-75"
      v-for="over in state.overviews">
      <img alt="" :src="over.cover.external.url" class="h-56 w-full rounded-md transition-opacity " />

      <div class="mt-2">
        <dl>
          <div>
            <dd class="font-medium" v-for="text in over.properties.Name.title">{{ text.plain_text }}</dd>
          </div>
        </dl>

        <div class="mt-6 flex items-center gap-8 text-sm md:text-base ">
          <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <div class="mt-1.5 sm:mt-0" v-for="tag in over.properties.Tag.multi_select">
              <p class="text-rose-500">{{ tag.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const state = reactive({
  covers: [],
  overviews: [],
});

const res = await fetch("http://localhost:3000/api/csdl");

res.json().then((data) => {
state.overviews = data.csdls
});

</script>