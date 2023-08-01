<template>
	<view class="my-tabbar">
		我是 tab
	</view>
</template>

<script setup name="MyTabBar">

</script>

<style lang="scss">
	.my-tabbar {
		background-color: #333;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3.125rem; // 导航栏高度
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>