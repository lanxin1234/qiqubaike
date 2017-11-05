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
                color:#888;
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
                /*height: 40px;*/
                color: #333;
                line-height: 28px;
                padding-left: 16px;
                color:#4e4e4e;
               
            }
            .txtContent {
                width: 100%;
            }
        }
        footer {
            background: #fff;
            overflow: hidden;
            height: 40px;
            margin-bottom: 10px;
            /*border: 1px solid #eee;*/
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
        
        <div class="inner-content" v-for="item in morenshuju">
            <header>
                <span class="portrait">
                    <img :src="item.avatar">
                </span>
                <span class="username">{{item.user_name}}</span>
                <span class="report">举报</span>
            </header>
            <div class="mainContent">
                <!-- <span>{{morenshuju}}</span> -->
                <p class="subTitle" v-if="item.title">{{item.title}}</p>
                <div class="imgContent" v-for="child in item.media_data">
                    
                </div>
            </div>
            <footer>
                <span class="like">
                    <i></i>
                    {{item.dislike_start + item._incrs.dislike}}
                </span>
                <span class="dislike">
                    <i></i>
                    {{item.like_start + item._incrs.like}}
                </span>
                <span class="totel">
                    <i></i>
                    {{item.comment_total}}
                </span>
            </footer>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            morenshuju: [],
            swiperUrls:[{
                imgUrl:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/065a27c91ee1d2c40af05042fef06034.jpg",
                title:"贱问贱答·他说风雨中这点痛要死了要死了！"
            },{
                imgUrl:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/df85d84f4a3a17cefde5aa439ce12199.jpg",
                title:"女子朋友圈刷到“男友和别人结婚”！跑到婚礼现场大闹，新郎被警方带走"
            },{
                imgUrl:"http://bq-img.peco.uodoo.com/qiqu/img/buz/banner/90a3eabcd52d766bcedd111dc271c742.jpg",
                title:"搞事情，一个被主播耽误的段子手！"
            }]
        }
    },
    created() {
        var vm = this;
        this.$http.get("../../../data/data2.json").then((response) => {
            // console.log(response.data.mapList)
            vm.morenshuju = response.data.mapList
        })
    },
    directives: {
        height: {
            bind(el, binding) {
                var contentHeight = $(window).height() - binding.value
                $(el).height(contentHeight)
            }
        }
    }
}
</script>