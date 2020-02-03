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

import carouselJs from "../assets/js/carousel";

export default carouselJs;

</script>

<style scoped lang="scss">

@import "../assets/styles/carousel";

</style>