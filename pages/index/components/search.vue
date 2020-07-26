<template>
	<view class="page">
		<input class="input padding-left-sm" type="text" value="" @input="input" placeholder="搜素歌曲" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			input(e){
				console.log(e.detail.value)
				let ssWords = e.detail.value
				this.$store.dispatch("getMusicList",ssWords)
				// getMusicList
			}
		}
		
	}
</script>

<style>
	.input{
		height: 88rpx;
		align-content: center;
	}
</style>
