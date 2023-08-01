<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<Space direction="vertical">
			<Space wrap>
				<Button>Default</Button>
				<Button type="primary">Primary</Button>
				<Button type="dashed">Dashed</Button>
				<Button type="text">Text</Button>
			</Space>
			<Space wrap>
				<Button type="info">Info</Button>
				<Button type="success">Success</Button>
				<Button type="warning">Warning</Button>
				<Button type="error">Error</Button>
			</Space>
		</Space>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>