<template>
	<div class="product-carousel">
		<button class="product-carousel__close" @click="closeOut">X</button>
		<h2 class="product-carousel__title" v-html="title"></h2>
		<div class="product-carousel__section">
			<button @click="switchImage(-1)" class="product-carousel__button"><</button>
			<transition-group tag="div" name="slide">
				<img class="product-carousel__img" :src="targetImage.href" :key="targetImage.href" :alt="targetImage.alt">
			</transition-group>
			<button @click="switchImage(1)" class="product-carousel__button">></button>
		</div>
	</div>
</template>

<script>
	export default {
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
	}
</script>

<style scoped lang="scss">
@import "../assets/styles";
	
.product-carousel {
	position: fixed;
	margin: 0 auto;
	top: 200px;
	width: 500px;
	height: 500px;
	text-align: center;
	left: 0;
	right: 0;
	background-color: #fff;
	border: 2px solid #000;
	box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.6);
	&__close {
		position: absolute;
		right: 0;
		background-color: transparent;
		border: 2px solid $default-color;
		border-radius: 50%;
		font-size: 15px;
		margin: 5px;
		cursor: pointer;
		padding: 0 5px;
		&:hover {
			color: #fff;
			background-color: $default-color;
		}
	}
	&__img {
		height: 360px;
		width: 360px;
		margin: 0 auto;
		overflow: hidden;
	}
	&__section {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	&__title {
		font-size: 1em;
		margin-top: 40px;
	}
	&__button {
		background-color: transparent;
		border: 1px solid $default-color;
		font-size: 15px;
		margin: 0 5px 20px;
		height: 35px;
		cursor: pointer;
		&:hover {
			color: #fff;
			background-color: $default-color;
		}
	}
}

.slide-enter {
	width: 0;
}
.slide-enter-active {
	transition: width 0.5s;
}
.slide-leave {
	width: 360px;
}
.slide-leave-active {
	transition: width 0.5s;
	width: 0;
}

@media only screen and (max-width: 659px) {
	.product-carousel {
		width: 300px;
		height: 340px;
		&__img {
			width: 200px;
			height: 200px;
		}
	}
	
	.slide-enter {
		width: 200px;
	}
	.slide-enter-active {
		transition: none;
	}
	.slide-leave {
		display: none;
	}
	.slide-leave-active {
		transition: none;
	}
}
</style>