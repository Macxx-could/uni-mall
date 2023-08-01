<template>
	<view>
		<Carousel v-model="value" loop autoplay dots="none">
			<CarouselItem>
				<div class="demo-carousel">1</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">2</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">3</div>
			</CarouselItem>
			<CarouselItem>
				<div class="demo-carousel">4</div>
			</CarouselItem>
		</Carousel>
	</view>
</template>

<script setup name="MyCarousel">
	import {
		ref
	} from 'vue'
	const value = ref(0)
</script>

<style lang="scss">
	.demo-carousel {
		width: 100%;
		height: 25vh;
		background-color: #ccc;
	}
</style>