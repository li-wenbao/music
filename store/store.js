import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ssWords: "",
		musicList: [],
		muiscImg: [],
		muisc:"",
		muiscface:""
	},
	// 同步存储
	mutations: {
		screenmuta(state, listdata) {
			console.log(listdata)
			// 存储到数据仓库
			state.screendata = {
				screenarr: listdata
			}
		},
		initMusicList(state, list) {
			state.musicList = list.song
			// console.log("state.musicList",state.musicList)
			state.muiscImg = list.img1v1Url
			// console.log("list.img1v1Url=======",list.img1v1Url)
			// console.log("state.muiscImg",state.muiscImg)
		},
		initMusic(state, list) {
			state.muisc = list
		},
		initMusicFace(state, list) {
		state.muiscface = list
		}
	},
	actions: {
		getMusicList(context, val) {
			// Promise
			uni.request({
					url: 'https://autumnfish.cn/search',
					data: {
						keywords: val
					}
				})
				.then(data => {
					let [error, res] = data;
					let img1v1Url =[]
					// console.log(res.data.result);
					// console.log(res.data.result.songs);
					let song = res.data.result.songs
					// console.log("song:", song)
					// 获取歌曲头像
					song.map(item => {
						// console.log("fafsgsdgs:",item.artists)
						let arrItem = item.artists
						img1v1Url = arrItem.map(sitem =>{
							sitem.img1v1Url
						})
					})
					context.commit("initMusicList", {song,img1v1Url})
				})

		},
		playMusic(context, val) {
			uni.request({
					url: 'https://autumnfish.cn/song/url',
					data: {
						id: val
					}
				})
				.then(data => { 
					let [error, res] = data;
					// console.log("播放歌曲",res.data.data);
					let muisc = res.data.data[0].url
					// console.log("播放歌曲222",muisc);
					context.commit("initMusic", muisc)
				})
		},
		musicFace(context, val) {
			uni.request({
					url: 'https://autumnfish.cn/song/detail',
					data: {
						ids: val
					}
				})
				.then(data => { 
					let [error, res] = data;
					// console.log("播放SV",res.data.songs[0].al.picUrl);
					let muiscface = res.data.songs[0].al.picUrl
					// console.log("播放歌曲222",muisc);
					context.commit("initMusicFace", muiscface)
				})
		},
	},
})
