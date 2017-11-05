<style scoped lang='stylus'>
.content {
    background: #ccc;
    overflow-y: scroll;
    .inner-content {
        padding: 10px;
        width: 100%;
        background: #fff;
        -webkit-background-clip: content-box;
        -moz-background-clip: content-box;
        background-clip: content-box;
        -webkit-background-origin: border-box;
        background-origin: border-box;
        padding-bottom: 0;
        header {
            padding: 16px;
            overflow: hidden;
            span.portrait {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 9999px;
                overflow: hidden;
                float: left;
                img {
                    width: 100%;
                }
            }
            span.username {
                line-height: 30px;
                display: inline-block;
                height: 30px;
                float: left;
                margin-left: 15px;
            }
            span.report {
                float: right;
                border: 1px solid #ccc;
                color: #ccc;
                border-radius: 3px;
                font-size: 12px;
                padding: 2px 4px;
                margin-top: 4px;
                margin-right: 5px;
            }
        }
        .mainContent {
            width: 100%;
            background: #fff;
            .subTitle {
                width: 100%;
                height: 40px;
                color: #333;
                line-height: 40px;
                padding-left: 16px;
               
            }
            .imgContent {
                width: 100%;
                
            }
        }
        footer {
            background: #fff;
            overflow: hidden;
            height: 40px;
            span {
                display: block;
                margin-top: 7px;
                font-size: 12px;
                color: #333;
                float: left;
                line-height: 24px;
                margin-left: 10px;
                i {
                    display: inline-block;
                    position: relative;
                    top: 4px;
                    background: url(http://image.uc.cn/s/uae/g/0q/product/sprite/26.png) -25px -100px / 250px 237.5px no-repeat;
                    height: 20px;
                    width: 20px;
                }
            }
            span.dislike {
                margin-left: 20px;
                i {
                    background-position: -75px -100px;
                }
            }
            span.totel {
                float: right;
                margin-right: 20px;
                i {
                    background-position: -200px -100px;
                }
            }
        }
    }
}
</style>
<template>
    <div class="content" v-height="40">
        <div class="inner-content" v-for="item in videoList">
            <header>
                <span class="portrait">
                    <img :src="item. avatarUrl">
                </span>
                <span class="username">{{item.username}}</span>
                <span class="report">举报</span>
            </header>
            <div class="mainContent">
                <p class="subTitle">{{item.title}}</p>
                <div class="imgContent">
                    <vui-video :item="item"></vui-video>
                </div>
            </div>
            <footer>
                <span class="like">
                    <i></i>
                    {{item.dislike}}
                </span>
                <span class="dislike">
                    <i></i>
                   {{item.like}}
                </span>
                <span class="totel">
                    <i></i>
                   {{item.pinglun}}
                </span>
            </footer>
        </div>
    </div>
</template>
<script>
import vuiVideo from "../../components/video.vue"
export default {
    data() {
        return {
        	// 每一个组件维护自己的状态，视频总时间，当前事件，声音的大小，id  等等
        	videoList:[{
                username:"海小田",
        		title:"空气最怕突然的安静！",
        		id:"video1",
        		cur:"播放",
        		duration:0,
        		currentTime:0,
        		volume:0.3,
                dislike:53,
                like:325,
                pinglun:20,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/1610201948aa1f79ef1aeb4775bfe69978348b0e49x1008x1008x112.jpg;3,160",
        		src:"http://qiqu.uc.cn/api/video?id=36dae5ab6a13b761d11ff36f233cfbeb"
        	},{
                username:"非洲用户",
        		title:"尬舞",
        		id:"video2",
        		cur:"播放",
				duration:0,
				currentTime:0,
				volume:0.3,
                dislike:23,
                like:506,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/151014122151e5f0b291948d74145cd92ede70c498.jpg;3,160",
        		src:"https://wsqncdn.miaopai.com/stream/vdpBmABcauG0FPDZNE3n-UgihupjTyekBfDsZQ___32.mp4?ssig=482e54c3e4a501e2c0ba4060bd87d778&time_stamp=1509803062035"
        	},{
                username:"我们都是宠物迷",
                title:"擅长纪录片风格的滑板摄影师 Patrik Wallner 和 adidas 日本团队走上街头，做了一部新片。Patrik抓到了小春日和式的酷，行云流水般的独特 ​",
                id:"video2",
                cur:"播放",
                duration:0,
                currentTime:0,
                volume:0.3,
                dislike:23,
                like:506,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/151014122151e5f0b291948d74145cd92ede70c498.jpg;3,160",
                src:"http://qiqu.uc.cn/api/video?id=5eb0c6e75becfef5e29e6c0007893ccf"
            },{
                username:"奇趣视频",
                title:"看过这个视频的都想想养猫了",
                id:"video2",
                cur:"播放",
                duration:0,
                currentTime:0,
                volume:0.3,
                dislike:10,
                like:76,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/s/uae/g/0q/product/q-v-a.jpg",
                src:"http://10.65.0.1/IXC82c9645b0ed5a990f2511b8d6ff29c49_10.6.26.23/us.sinaimg.cn/000Y59ZJjx07c9auQvtZ010f01007xGT0k01.mp4?Expires=1509803937&ssig=dFZFX5p2B7&KID=unistore,video"
            },{
                username:"奇趣视频",
                title:"两台妹模仿的Betakkuma熊头人舞,哈哈哈太魔性了",
                id:"video2",
                cur:"播放",
                duration:0,
                currentTime:0,
                volume:0.3,
                dislike:23,
                like:506,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/151014122151e5f0b291948d74145cd92ede70c498.jpg;3,160",
                src:"http://qiqu.uc.cn/api/video?id=dd01ba08ad26053227300db5bd593817"
            },{
                username:"奇趣视频",
                title:"亲爹扔橄榄球帮儿子拔牙",
                id:"video2",
                cur:"播放",
                duration:0,
                currentTime:0,
                volume:0.3,
                dislike:23,
                like:506,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/151014122151e5f0b291948d74145cd92ede70c498.jpg;3,160",
                src:"http://qiqu.uc.cn/api/video?id=2901a11120f6aed6a162e8ef803bdebf"
            },{
                username:"奇趣视频",
                title:"小时候打针的你！",
                id:"video2",
                cur:"播放",
                duration:0,
                currentTime:0,
                volume:0.3,
                dislike:23,
                like:506,
                pinglun:108,
                 avatarUrl: "http://image.uc.cn/o/uop/1Ht08/;;0,uop/g/uop/avatar/151014122151e5f0b291948d74145cd92ede70c498.jpg;3,160",
                src:"http://qiqu.uc.cn/api/video?id=fa5ab49d37e9c84374b5504b086e5776"
            }]
        }
    },
    directives: {
        height: {
            bind(el, binding) {
                var contentHeight = $(window).height() - binding.value
                $(el).height(contentHeight)
            }
        }
    },
    components:{
    	vuiVideo
    }
}
</script>