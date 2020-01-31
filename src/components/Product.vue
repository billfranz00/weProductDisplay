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
export default {
  name: 'product',
  props: {
    product: Object
  },
  methods: {
    displayThumbnails() {
      this.$emit('displayThumbnails');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/defaults";

@mixin set-width {
  max-width: 360px;
  width: 100%;
}

.product-container__module {
  list-style-type: none;
  width: 100%;
  border: 2px solid #565458;
  margin: 25px 0;
}
.product-container__title {
  @include set-width;
  margin: 0 auto;
}
.product-container__img {
  @include set-width;
  cursor: pointer;
}
.product-container__link {
  text-decoration: none;
  color: $default-color;
  &:hover {
    color: #42b983;
  }
}

@media only screen and (min-width: 660px) {
  .product-container__module {
    list-style-type: none;
    width: 32%;
    margin: 0 2px 50px;
  }
  .product-container__title {
    font-size: 1em;
  }
}
@media only screen and (min-width: 1280px) {
  .product-container__module {
    margin-left: 5px;
    margin-right: 5px;
  }
  .product-container__title {
    font-size: 1.1em;
  }
}
</style>
