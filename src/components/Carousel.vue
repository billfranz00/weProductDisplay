<template>
	<div class="product-carousel">
		<button class="product-carousel__close" @click="closeOut">X</button>
		<h2 class="product-carousel__title">{{ title }}</h2>
		<div class="product-carousel__section">
			<button class="product-carousel__button"><</button>
			<img class="product-carousel__img" :src="targetImage.href" :alt="targetImage.alt">
			<button class="product-carousel__button">></button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			images: {
				type: Array,
				requred: true
			},
			title: String
		},
		computed: {
			targetImage() {
				return this.images[0];
			}
		},
		methods: {
			closeOut() {
				this.$emit("closeOut");
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
	width: 400px;
	height: 240px;
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
		height: 150px;
		margin: 0 auto;
	}
	&__section {
		display: flex;
		align-items: center;
	}
	&__title {
		font-size: 1em;
		margin-top: 25px;
	}
	&__button {
		background-color: transparent;
		border: 1px solid $default-color;
		font-size: 15px;
		margin: 0 5px;
		height: 35px;
		cursor: pointer;
		&:hover {
			color: #fff;
			background-color: $default-color;
		}
	}
}
</style>