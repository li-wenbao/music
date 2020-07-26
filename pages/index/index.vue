<template>
	<view class="page">
		<view class="width100 bg-white">
			<Search></Search>
			<!-- <MusicList :musicList="musicList" :toplay="toplay"></MusicList> -->
		</view>
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
	import Search from "./components/search.vue"
	// import MusicList from "./components/musicList.vue"
	import {
		mapState
	} from "vuex"
	export default {
		components: {
			Search,
			// MusicList
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		computed: {
			...mapState(["musicList"])
		},
		methods: {
			playSong(id) {
				uni.navigateTo({
					url: "../play/playSongs?id=" + id
				})
			},
		}
	}
</script>

<style>

</style>
