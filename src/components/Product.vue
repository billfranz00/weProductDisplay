<template>
  <li class="product-container__module">
    <img class="product-container__img"
        :src="product.hero.href"
        :alt="product.name"
        @click="displayThumbnails">
    <a class="product-container__link" :href="product.links.www" target="__blank">
      <h3 class="product-container__title" v-html="product.name"></h3>
    </a>
    <p>Price: <strong>${{ product.priceRange.selling.low }} - ${{ product.priceRange.selling.high }}</strong></p>
  </li>
</template>

<script>

import productJs from "../assets/js/product";

export default productJs;

</script>

<style scoped lang="scss">

@import "../assets/styles/product";

</style>
