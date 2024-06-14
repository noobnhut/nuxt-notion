<template>
  <div v-for="data in state.page" :key="data.id">
    <div v-if="data.type == 'image'" class="flex justify-center items-center">
      <template v-if="data.image.type == 'external'">
        <img :src="data.image.external.url" alt="" class="max-w-full h-auto" />
      </template>

      <template v-if="data.image.type == 'file'">
        <img :src="data.image.file.url" alt="" class="max-w-full h-auto" />
      </template>
    </div>

    <div v-if="data.type == 'heading_1'" class="mt-2">
      <p class="font-bold text-xl md:text-3xl">{{ data.content }}</p>
    </div>

    <div v-if="data.type == 'heading_3'" class="mt-2">
      <p class="font-bold text-base md:text-xl">{{ data.content }}</p>
    </div>

    <div v-if="data.type == 'paragraph'" class="mt-1">
      <p class="text-xs md:text-base">{{ data.content }}</p>
    </div>

    <div v-if="data.type == 'numbered_list_item'" class="mt-1">
      <ul class="list-none">
        <li class="text-xs md:text-base">
          {{ " " }}<strong>{{ data.content.split(":")[0] }}</strong
          >: {{ data.content.split(":").slice(1).join(":") }}
        </li>
      </ul>
    </div>

    <div v-if="data.type == 'bulleted_list_item'" class="mt-1">
      <ul class="list-disc ml-10">
        <li class="text-xs md:text-base">{{ data.content }}</li>
      </ul>
    </div>

    <code
      v-if="data.type == 'code'"
      class="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6 justify-center"
    >
      <span class="flex gap-4">
        <span class="flex-1">
          <pre>{{ data.content }}</pre>
        </span>
      </span>
    </code>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const state = reactive({
  page: [],
});

const route = useRoute();

const res = await fetch(`http://localhost:3000/api/page/${route.params.id}`);
const data = await res.json();
state.page = data.page;
</script>
