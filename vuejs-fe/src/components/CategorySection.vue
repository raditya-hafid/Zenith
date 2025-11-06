<script setup>
const categories = [
    {
        title: "LAPTOP",
        file: "mac.png",
        category: "Computing / Technology",
    },
    {
        title: "HANDPHONE",
        file: "ip.png",
        category: "Handphone / Gadget",
    },
    {
        title: "EARBUDS",
        file: "ear.png",
        category: "Accessories",
    },
    {
        title: "GPU",
        file: "gpu.png",
        category: "Hardware",
    },
    {
        title: "SMART TV",
        file: "tv.png",
        category: "Home Electronics",
    },
];
const getImage = (file) => new URL(`../assets/${file}`, import.meta.url).href;
</script>

<template>
    <section class="py-16 px-6">
        <h3 class="text-3xl font-bold text-center mb-10">
            Products Categories
        </h3>

        <div
            data-aos-duration="1300"
            data-aos="fade-up"
            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 reveal"
        >
            <div
                v-for="category in categories"
                :key="category.id"
                class="bg-blue-900 text-white rounded-2xl p-2 flex flex-col items-center h-full w-full max-w-[380px] justify-between"
            >
                <!-- Kategori dinamis -->
                <span class="text-sm tracking-wide text-pink-300 mb-2">
                    {{ category.category }}
                </span>
                <img
                    :src="getImage(category.file)"
                    :alt="category.title"
                    class="object-contain"
                />
                <p class="text-lg font-semibold">{{ category.title }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
img {
    height: 150px;
}
</style>
