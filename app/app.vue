<style scoped lang='stylus'>
    header{
        background: orange;
        ul{
            overflow: hidden;
            li{
                float: left;width: 25%;height: 40px;line-height: 40px;text-align: center;
            }
            li.cur{
                color: #000;
                font-weight: bold;
            }
        }
    }
</style>
<template>
    <div>
        <header>
            <ul>
                <li v-for="item in tabNav" :class="{cur : item.title == $route.name}" @click="routerGo(item)">{{item.title}}</li>
                <!-- <v-touch tag="li" v-for="item in tabNav"  :key="item.id" :class="{cur : item.title == $route.name}"  @tap="routerGo(item)">{{item.title}}</v-touch> -->
            </ul>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabNav:[{
                title:"精选",
                url:"/jingxuan"
            },{
                title:"视频",
                url:"/shipin"
            },{
                title:"段子",
                url:"/duanzi"
            },{
                title:"发现",
                url:"/faxian"
            }]
        }
    },
    methods:{
        routerGo(item){
            router.push({path:item.url})
        }
    }
}
</script>