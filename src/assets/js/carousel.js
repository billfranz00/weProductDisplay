const carouselJs = {
	data() {
		return {
			imageIndex: 0
		}
	},
	props: {
		images: {
			type: Array,
			requred: true
		},
		title: String
	},
	computed: {
		targetImage() {
			return this.images[this.imageIndex];
		},
		imageArrayLength() {
			return this.images.length;
		}
	},
	methods: {
		closeOut() {
			this.$emit("closeOut");
		},
		switchImage(move) {
			if (this.imageArrayLength === this.imageIndex + move) {
				this.imageIndex = 0;
			} else if (this.imageIndex + move < 0) {
				this.imageIndex = this.imageArrayLength - 1;
			} else {
				this.imageIndex += move;
			}
		}
	}
};

export default carouselJs;