<template>
	<view class="page">
		<view style="position: relative;height: 100%;">
			<view class="flex justify-center" style="position: absolute;top:30%;left:50%; margin-left:-30%;">
				<view class="flex align-center justify-center round bg-black imgrotate_common" style="width: 430rpx; height: 430rpx;">
					<image class="flex align-center justify-center round bg-white " style="width: 230rpx; height: 230rpx;" :src="muiscface">
					</image>
				</view>
			</view>
			<view style="position: fixed;bottom: 50rpx;width: 100%;">
				<view>{{play}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				audioAction: {
					method: 'pause'
				},
				play: "播放"
			}
		},
		onLoad(options) {
			let id = options.id
			this.$store.dispatch("playMusic", id)
			this.$store.dispatch("musicFace", id)
			this.paly()
		},
		computed: {
			...mapState(["muisc", "muiscface"])
		},
		methods: {
			paly() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = this.muisc;
			}
		}

	}
</script>

<style>
	.page {
		height: 100vh;
		background: linear-gradient(to top right, #CDDC39 0%, #8BC34A 25%, #FFEB3B 100%);
		color: #FDE6D2;
		/* background-color: #333333; */
	}

	.play-box {
		width: 200rpx;
		height: 200px;
	}

	@-webkit-keyframes changeright {

		0% {
			-webkit-transform: rotate(0deg);
		}

		50% {
			-webkit-transform: rotate(180deg);
		}

		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	.imgrotate_common {
		-webkit-animation: changeright 6s linear infinite;
	}
</style>
