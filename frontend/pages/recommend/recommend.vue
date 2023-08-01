<template>
	<view class="page-container">
		<!-- 最顶部的功能区-目前没想好怎么用 -->
		<Card style="width:100%" :bordered="false" dis-hover>
			<Grid :col="4" center :border="false">
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
			</Grid>
		</Card>
		<!-- 某种活动商品入口，比如说折扣商品或者课程 -->
		<Card style="width:100%;margin-top: 1rem;" :bordered="false" dis-hover>
			<Grid :col="4" center :border="false">
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>课程兑换</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
				<GridItem>
					<Icon type="ios-add-circle-outline" class="grid-item-icon" />
					<view>未添加</view>
				</GridItem>
			</Grid>
		</Card>
		<!-- 这里是根据算法推荐的商品列表-建议只放几个商品作为热门商品就好 -->
		<view class="hot-goods-group">
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
			<Card style="width:100%;" :bordered="false" dis-hover>
				<img src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large" class="goods-image">
				<h4>雅马哈电动车</h4>
				<text class="points">447积分</text>
			</Card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.page-container {
		padding-bottom: 3.75rem;

		.grid-item-icon {
			font-size: 2rem;
		}

		.hot-goods-group {
			margin-top: 0.5rem;
			padding: 0.625rem;
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 0.5rem;
			justify-items: center;
			align-items: center;

			.goods-image {
				width: 100%;
				height: 80px;
			}

			.points {
				color: red;
				font-weight: bold;
			}
		}

		::v-deep {
			.ivu-grid-item {
				height: 3rem;
			}
		}
	}
</style>