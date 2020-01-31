<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
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
import products from "./data/products";
import Product from './components/Product.vue';
import Carousel from "./components/Carousel";

export default {
  name: 'app',
  data() {
    return {
      products: products,
      title: "West Elm Products",
      showThumbnails: false,
      productTitle: "",
      productImages: []
    }
  },
  components: {
    Product,
    Carousel
  },
  created() {
    console.log(this.products);
  },
  methods: {
    displayThumbnails(targetProduct) {
      this.showThumbnails = true;
      console.log(targetProduct.images.length);
      this.productTitle = targetProduct.name;
      this.productImages = targetProduct.images;
    },
    removeCarousel() {
      this.showThumbnails = false;
      this.productTitle = "";
      this.productImages = [];
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/styles";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $default-color;
    margin-top: 60px;
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
