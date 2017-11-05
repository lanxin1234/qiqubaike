<style scoped lang='stylus'>
	.swiper-slide{
		position: relative;
		img{
			width: 100%;
		}
		p{
			position: absolute;bottom: 0;left: 0;width: 100%;height: 40px;line-height: 40px;color: #fff;font-size: 12px;background: rgba(0,0,0,0.8);
			padding-left: 20px;
		}
	}
	
	/*层叠插件样式表里面的小圆点的样式 注意：不能修改任何库里面的默认样式*/
	.my_swiper_container .swiper-pagination-bullets{
		bottom:0;
	}
</style>
<template>
    <div>
        <div class="swiper-container my_swiper_container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperUrls">
                	<p>{{item.title}}</p>
                	<img :src="item.imgUrl" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "../../assets/swiper-3.4.2.min.js"
export default {
    props: ["swiperUrls"],
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination'
        })
    }
}
</script>