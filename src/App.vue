<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/logo.png">
    <h1>{{ title }}</h1>
    <ul class="product-container">
      <Product v-for="product in products.groups"
              :key="product.id"
              :product="product"
              @displayThumbnails="displayThumbnails(product)"/>
    </ul>
    <Carousel v-if="showThumbnails"
              @closeOut="removeCarousel"
              :images="productImages"
              :title="productTitle" />
  </div>
</template>

<script>

import appJs from "./app";

export default appJs;

</script>

<style lang="scss">
  
@import "./assets/styles/app";

</style>
