const productJs = {
  name: 'product',
  props: {
    product: Object
  },
  methods: {
    displayThumbnails() {
      this.$emit('displayThumbnails');
    }
  }
};

export default productJs;