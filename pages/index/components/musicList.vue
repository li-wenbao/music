<template>
	<view class="page">
		<view class="width100 bg-white padding-sm">
			<view class="padding-sm" v-for="(item,index) in musicList" :key="index">
				<view class="flex " @click="playSong(item.id)">
					<view class="flex xh align-center justify-center text-df text-gray">{{index + 1}}</view>
					<view class="flex flex-sub">
						<view class="padding-top-xs padding-bottom-xs">
							<view class="text-lg">{{item.name}}</view>
							<view class="text-sm text-gray" v-for="(sItem,sIndex) in item.artists" :key="sIndex">
								{{sItem.name}}
							</view>
						</view>
					</view>
					<view class="flex align-center">
						<text class="cuIcon-more"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props:{
			musicList:Array
		},
		data(){
			return {
				
			}
		},
		methods: {
			playSong(id) {
				// console.log("==============",id)
				// uni.navigateTo({
				// 	url: "../../play/playSongs?id=" + id
				// })
				// console.log("==============2222222",id)
				this.$emit("toplay",id)
				// uni.redirectTo({
				// 	url: "../../play/playSongs?id=" + id
				// })
			}
		}
	}
</script>

<style>
	.xh {
		width: 60rpx;
	}
</style>
