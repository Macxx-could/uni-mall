<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<MyTabs />
		<!-- 底部导航栏 -->
		<MyTabBar />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import MyTabBar from '../../components/myTabBar.vue' // 底部导航栏
	import MyTabs from '../../components/myTabs.vue' // 顶部导航栏
	// 当前激活的tabPane
	const tabPane = ref("推荐")
</script>

<style lang="scss" scoped>
	.content {
		background-color: #f4f4f4;
		// 这里是减去了底部导航栏的高度
		min-height: calc(100vh - 3.125rem);



	}
</style>