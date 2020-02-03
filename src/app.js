import products from "./data/products";
import Product from './components/Product.vue';
import Carousel from "./components/Carousel";

const appJs = {
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
  methods: {
    displayThumbnails(targetProduct) {
      this.showThumbnails = true;
      this.productTitle = targetProduct.name;
      this.productImages = targetProduct.images;
    },
    removeCarousel() {
      this.showThumbnails = false;
      this.productTitle = "";
      this.productImages = [];
    }
  }
};

export default appJs;
