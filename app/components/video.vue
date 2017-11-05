<style scoped lang='stylus'>
video {
    width: 100%;
}
.video{ 

}
.kongzhiqi{ 
	width: 100%;    overflow: hidden;
}
.pause_play{
	float: left;height: 40px;width: 40px;background: #333;
	color: #fff;text-align: center;line-height: 40px;overflow: hidden;
}
.currentTime{
	float: left;
	position: relative;width: 200px;height: 3px;top: 18px;left: 5px;
	span{
		position: absolute;top: 0;left: 0;display: block;
	}
	span.zong_currentTime{
		background: red;width: 100%;height: 100%;
	}
	span.dangqian_currentTime{
		z-index: 2;
		background: green;height: 100%;
	}
}
.volume{
	float: right;
	input{
		width: 108px;margin-top: 10px;display: block;
	}
	
}
</style>
<template>
    <div class="video">
        <video :src="item.src" :id="item.id" controls="controls" poster=""></video>
        <!-- <div class="kongzhiqi">
        	<span @click="play(item)" class="pause_play">{{item.cur}}</span>
        	<p class="currentTime" >
        		<span class="dangqian_currentTime"  @click="goTime(item,$event)" :style='{"width":currentTime / duration * 100 + "%"}'></span>
        		<span class="zong_currentTime" @click="goTime(item,$event)"></span>
        		<i>{{currentTime | duration}} / {{duration | duration}}</i>
        	</p>
        	<p class="volume">
        		<input type="range" min="0" max="1" step="0.1" v-model="item.volume" @change="changeVolume(item)">
        	</p>
        </div> -->
    </div>
</template>
<script>
export default {
    props: ["item"],
    data() {
        return {
			currentTime:0,
			duration:0
        }
    },
    filters: {
		duration(s) {
			// http://blog.csdn.net/chritina/article/details/69397810
			// 时分秒转换
			var t;
			if (s > -1) {
				var hour = Math.floor(s / 3600);
				var min = Math.floor(s / 60) % 60;
				var sec = s % 60;
				if (hour < 10) {
					t = '0' + hour + ":";
				} else {
					t = hour + ":";
				}

				if (min < 10) { t += "0"; }
				t += min + ":";
				if (sec < 10) { t += "0"; }
				t += sec.toFixed(2);
			}
			return t;
		}

	},
    methods:{
    	play(item){
    		// video api
    		// 网址 ：http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
    		// video.js 视频播放的一个插件
    		
    		var vm = this;
    		// 点击播放
    		$("#" + item.id)[0].play();
    		// 点击进行播放 和暂停
    		if(item.cur == "播放"){
    			$("#" + item.id)[0].play();
    			// 设置时间
    			vm.duration = $("#" + item.id)[0].duration

    			var timer = setInterval(function(){
    				vm.currentTime = $("#" + item.id)[0].currentTime
    			}, 1000)

    			item.cur="暂停"
    		}else if(item.cur == "暂停"){
    			// 点击暂停
    			$("#" + item.id)[0].pause();
    			item.cur="播放"
    		}
    	},
    	goTime(item,event){
    		// 点击时间条的事件
    		var during = event.offsetX / 200;
    		// 设置 点击位置的 播放时间
    		$("#" + item.id)[0].currentTime = during * $("#" + item.id)[0].duration
    		// console.log($(this).width());
    	},
    	changeVolume(item){
    		// 设置声音
    		$("#" + item.id)[0].volume = item.volume
    	}
    }
}
</script>