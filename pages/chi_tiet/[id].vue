<template>
  <div v-for="data in state.page" :key="data.id"  class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-2">
    <div v-if="data.type == 'image'" class="flex justify-center items-center">
      <template v-if="data.image.type == 'external'">
        <img :src="data.image.external.url" alt="" class="max-w-full h-auto" />
      </template>

      <template v-if="data.image.type == 'file'">
        <img :src="data.image.file.url" alt="" class="max-w-full h-auto" />
      </template>
    </div>

    <div v-if="data.type == 'heading_1'" class="mt-2">
      <p class="text-2xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-gray-400">{{ data.content }}</p>
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

    <div
      v-if="data.type == 'code'"
    >
    <pre><code class="lang-js"><span>{{ data.content }}</span></code></pre>
  </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";
import { useRoute } from "vue-router";

onMounted(() => {
  Prism.highlightAll();
});

const state = reactive({
  page: [],
});

const route = useRoute();

const res = await fetch(`http://localhost:3000/api/page/${route.params.id}`);
const data = await res.json();
state.page = data.page;


</script>
