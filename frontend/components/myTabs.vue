<template>
	<view class="my-tabs">
		<Tabs value="tabPane" type="card">
			<TabPane label="推荐" name="推荐">
				<Recommend></Recommend>
			</TabPane>
			<TabPane label="文具" name="文具">标签二的内容</TabPane>
			<TabPane label="课程" name="课程">标签二的内容</TabPane>
		</Tabs>
	</view>
</template>

<script setup name="MyTabs">
	import {
		ref
	} from 'vue'
		import Recommend from '../pages/recommend/recommend.vue' // 推荐页面
	// 当前激活的tabPane
	const tabPane = ref("推荐")
</script>

<style lang="scss">
	.my-tabs {
		::v-deep {

			.ivu-tabs-bar,
			.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
				background-color: #fff;
				color: black;
				font-weight: bold;
				
			}

			.ivu-tabs-nav-container {
				margin-bottom: 0;
				height: 2.0875rem !important;
				font-size: 1rem;
			}

			.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab,
			.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
				border-color: transparent !important;
			}

			.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active,
			.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
				font-weight: bold;
				color: red;
				// font-size: 1.2rem;
				position: relative;
				height: 2.8125rem;
			}

			.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active::after {
				content: "";
				display: block;
				width: 100%;
				height: 2px;
				border-radius: 2px;
				background-color: red;		
			}
		}
	}
</style>