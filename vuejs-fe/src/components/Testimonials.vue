<script setup></script>

<template>
  <section class="py-16 px-6 bg-gray-50">
    <h3 class="text-3xl font-bold text-center mb-10">
      Read What Others Have To Say
    </h3>

    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="n in 3"
        :key="n"
        class="bg-blue-900 text-white rounded-2xl p-6 w-72 text-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
          class="w-20 h-20 mx-auto rounded-full mb-4"
          alt="Profile"
        />
        <h4 class="font-bold mb-2">RADITYA HAFID</h4>
        <p class="text-sm text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          harum.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
