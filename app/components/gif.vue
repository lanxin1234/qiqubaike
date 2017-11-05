<style scoped lang='stylus'>
img {
    width: 100%;
}

div {
    position: relative;
}

p.play {
    width: 98px;
    height: 96px;
    border-radius: 9999px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    background:url(../../assets/26.png) no-repeat -224px -201px;
    background-size:400px 400px;
}
div.bg{
    width:;
}
</style>
<template>
    <div>
        <!-- <span>{{child}}</span> -->
        <v-touch tag="p" class="play"  @tap="play" v-show="isShowPlay"></v-touch>
        <img v-lazy="child.wifi_img_url" alt="">
    </div>
</template>
<script>
export default {
    props: ["child"],
    data() {
        return {
            isShowPlay: true
        }
    },
    methods: {
        play() {
        	this.isShowPlay = false;
        	this.child.wifi_img_url = this.child.origin_img_url.origin_pic_url
        }
    }
}
</script>