<script setup>
const features = [
  {
    icon: "why1",
    title: "Endless Choices",
    desc: "Discover collections from many brands, all in one marketplace.",
  },
  {
    icon: "why2",
    title: "Shop with Confidence",
    desc: "Smooth checkout, secure payment, and fast delivery.",
  },
  {
    icon: "why3",
    title: "Trusted by Shoppers",
    desc: "Real reviews and ratings guide your best purchase.",
  },
];
const getImage = (icon) => new URL(`../assets/${icon}`, import.meta.url).href;
</script>

<template>
  <section class="bg-pink-500 text-white py-12 px-6">
    <h3 class="text-3xl font-bold text-center my-[-4] mb-14">WHY CHOOSE US?</h3>

    <div class="flex flex-wrap justify-center gap-10">
      <div
        v-for="(item, index) in features"
        :key="index"
        class="text-center max-w-xs"
      >
        <div class="text-5xl mb-4">{{ item.icon }}</div>
        <h4 class="font-bold text-lg mb-2">{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
